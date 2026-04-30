"use client";

import { DatePicker } from "zaman";
import Image from "next/image";
import { useContext, useState } from "react";
import TourContext from "@/context/TourContext";

import styles from "./UserForm.module.css";

function UserForm() {
  const { user } = useContext(TourContext);
  const fullName = `${user?.firstName} ${user?.lastName}`;
  const genderLabel =
    user?.gender === "male" ? "مرد" : user?.gender === "female" ? "زن" : "-";



  return (
    <div className={styles.inputs}>
      <input
        type="text"
        placeholder="نام و نام خانوادگی"
        value={fullName}
        readOnly
      />
      <input
        className="vazirFont"
        type="text"
        placeholder="کد ملی"
        value={`${user?.nationalCode}`}
        readOnly
      />
      {/* <label>
        <Image
          src="/images/calendar-3.png"
          width={16}
          height={16}
          alt="torino logo"
        />
        تاریخ تولد
      </label> */}
      {/* <DatePicker onChange={(e) => console.log(e.value)} /> */}
      <input
        type="text"
        placeholder="تاریخ تولد"
        value={new Date(user?.birthDate).toLocaleDateString("fa-IR")}
        readOnly
      />
      <input type="text" placeholder="جنسیت" value={genderLabel} readOnly />
    </div>
  );
}

export default UserForm;
