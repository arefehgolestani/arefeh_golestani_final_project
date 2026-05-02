"use client";

import { useContext, useState } from "react";
import { toast } from "react-toastify";

import TourContext from "@/context/TourContext";
import api from "@/services/config";
import { userInfo } from "@/services/EndpointApi";

import FormInput from "../element/FormInput";

import styles from "./EmailInput.module.css";

function EmailInput({ setShowEmail }) {
  const { user, setUser } = useContext(TourContext) || {};

  const [email, setEmail] = useState(user.email || "");


  const emailHandler = async (e) => {
    if (!email) {
      toast.error("وارد کردن ایمیل الزامی میباشد");
      return;
    }

    try {
      const data = await api.put(userInfo, { email });

      toast.success(data.data.message);
      setUser({ ...user, email });
      setShowEmail(false);
    } catch (error) {
      console.log(error.response?.data);
      toast.error("خطا در ثبت ایمیل");
    }
  };

  return (
    <div className={styles.userEmail}>
      <FormInput
        type={"text"}
        placeholder={"آدرس ایمیل"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={emailHandler}>تایید</button>
      <button className={styles.second} onClick={() => setShowEmail(false)}>
        انصراف
      </button>
    </div>
  );
}

export default EmailInput;
