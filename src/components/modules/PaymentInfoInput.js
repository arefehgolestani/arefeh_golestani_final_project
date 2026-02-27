"use client";

import { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

import TourContext from "@/context/TourContext";
import api from "@/services/config";
import { userInfo } from "@/services/EndpointApi";
import FormInput from "../element/FormInput";

import styles from "./PaymentInfoInput.module.css";

function PaymentInfoInput({ setShowBankInfo }) {
  const { user, setUser } = useContext(TourContext) || {};

  const [sheba, setSheba] = useState("");
  const [account, setAccount] = useState("");
  const [card, setCard] = useState("");

  useEffect(() => {
    if (user?.payment) {
      setSheba(user.payment.shaba_code || "");
      setCard(user.payment.debitCard_code || "");
      setAccount(user.payment.accountIdentifier || "");
    }
  }, [user]);

  const validateSheba = (value) => {
    if (!value.startsWith("IR")) return false;
    if (value.length !== 26) return false;

    const numbersPart = value.slice(2);
    if (!/^\d+$/.test(numbersPart)) return false;

    return true;
  };

  const validateCard = (value) => {
    // if (!value) return true;

    const cleaned = value.replace(/\s|-/g, "");
    return /^\d{16}$/.test(cleaned);
  };

  const handleCardChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); 

    value = value.substring(0, 16); 

    const formatted = value.match(/.{1,4}/g)?.join("-") || value;

    setCard(formatted);
  };
  const handleAccountChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setAccount(value);
  };

  const EditHandler = async () => {
    if (!validateSheba(sheba)) {
      return toast.error("شماره شبا معتبر نیست");
    }

    if (!validateCard(card)) {
      return toast.error("شماره کارت باید 16 رقم باشد");
    }

    try {
      await api.put(userInfo, {
        payment: {
          shaba_code: sheba,
          debitCard_code: card.replace(/-/g, ""),
          accountIdentifier: account,
        },
      });

      setUser((prev) => ({
        ...prev,
        payment: {
          ...prev.payment,
          shaba_code: sheba,
          debitCard_code: card.replace(/-/g, ""),
          accountIdentifier: account,
        },
      }));

      toast.success("اطلاعات بانکی ثبت شد");
      setShowBankInfo(false);
    } catch (error) {
      console.log(error.response?.data);
      toast.error("خطا در ثبت اطلاعات بانکی");
    }
  };

  return (
    <div className={styles.paymentInfo}>
      <div className={styles.paymentInput}>
        <FormInput
          type={"text"}
          placeholder={"شماره شبا"}
          value={sheba}
          onChange={(e) => setSheba(e.target.value)}
        />
        <FormInput
          type={"text"}
          placeholder={"شماره کارت"}
          value={card}
          onChange={handleCardChange}
        />
        <FormInput
          type={"text"}
          placeholder={"شماره حساب"}
          value={account}
          onChange={handleAccountChange}
        />
      </div>
      <div className={styles.button}>
        <button onClick={EditHandler} className={styles.first}>
          تایید
        </button>
        <button
          onClick={() => setShowBankInfo(false)}
          className={styles.second}
        >
          انصراف
        </button>
      </div>
    </div>
  );
}

export default PaymentInfoInput;
