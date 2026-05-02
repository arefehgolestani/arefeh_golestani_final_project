"use client";

import { useState, useEffect } from "react";

import styles from "./UserForm.module.css";

function UserForm() {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("/api/auth/user")
      .then((res) => res.json())
      .then((data) => {
        if (data.user !== null) {
          setUser(data.user);
        }
      });
  }, []);
  

  const fullName = `${user?.firstName || "نام و"} ${user?.lastName || "نام خانوادگی"}`;
  const nationalCode = `${user?.nationalCode || "کدملی"}  `;

  const genderLabel =
    user?.gender === "male"
      ? "مرد"
      : user?.gender === "female"
        ? "زن"
        : "جنسیت";

  const birthDate = user?.birthDate
    ? new Date(user.birthDate).toLocaleDateString("fa-IR")
    : "تاریخ تولد";

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
        value={nationalCode}
        readOnly
      />
      <input type="text" placeholder="تاریخ تولد" value={birthDate} readOnly />
      <input type="text" placeholder="جنسیت" value={genderLabel} readOnly />
    </div>
  );
}

export default UserForm;
