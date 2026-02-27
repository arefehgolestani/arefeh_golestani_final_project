"use client";

import { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { DatePicker } from "zaman";
import Image from "next/image";

import TourContext from "@/context/TourContext";
import api from "@/services/config";
import { userInfo } from "@/services/EndpointApi";

import FormInput from "../element/FormInput";

import styles from "./UserInfoInput.module.css";


function UserInfoInput({ setShowInfo }) {
  const { user, setUser } = useContext(TourContext) || {};

  const [fullName, setFullName] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [gender, setGender] = useState("");

  const parts = fullName.trim().split(" ");
  const firstName = parts[0];
  const lastName = parts.slice(1).join(" ");

  useEffect(() => {
    if (user) {
      setFullName(`${user.firstName || ""} ${user.lastName || ""}`.trim());

      setNationalCode(user.nationalCode || "");
      setGender(user.gender || "");

      if (user.birthDate) {
        setBirthDate(new Date(user.birthDate));
      }
    }
  }, [user]);


  const submitHandler = async () => {
    if (nationalCode && nationalCode.length !== 10) {
      return toast.error("کد ملی باید 10 رقم باشد");
    }

    if (fullName && fullName.trim().split(" ").length < 2) {
      return toast.error("نام و نام خانوادگی را کامل وارد کنید");
    }

    try {
      const parts = fullName.trim().split(" ");
      const firstName = parts[0];
      const lastName = parts.slice(1).join(" ");

      const formattedBirthDate = birthDate
        ? birthDate.toISOString().split("T")[0]
        : null;

      const res = await api.put(userInfo, {
        firstName,
        lastName,
        nationalCode,
        birthDate: formattedBirthDate,
        gender,
      });

      setUser((prev) => ({
        ...prev,
        firstName,
        lastName,
        nationalCode,
        gender,
        birthDate: formattedBirthDate,
      }));

      toast.success(res.data.message);
      setShowInfo(false);
    } catch (error) {
      console.log(error.response?.data);
      toast.error("خطا در ثبت اطلاعات");
    }
  };

  return (
    <div className={styles.userInfo}>
      <div className={styles.userInput}>
        <FormInput
          type={"text"}
          placeholder={"نام و نام خانوادگی"}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <FormInput
          className="vazirFont"
          type={"text"}
          placeholder={"کد ملی"}
          value={nationalCode}
          onChange={(e) => setNationalCode(e.target.value)}
        />
        <label>
          <Image
            src="/images/calendar-3.png"
            width={16}
            height={16}
            alt="torino logo"
          />
          تاریخ تولد
        </label>
        <DatePicker
          value={birthDate || null}
          onChange={(value) => setBirthDate(value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">انتخاب کنید</option>
          <option value="male">مرد</option>
          <option value="female">زن</option>
        </select>
      </div>
      <div className={styles.button}>
        <button onClick={submitHandler} className={styles.first}>
          تایید
        </button>
        <button onClick={() => setShowInfo(false)} className={styles.second}>
          انصراف
        </button>
      </div>
    </div>
  );
}

export default UserInfoInput;
