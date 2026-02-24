"use client";

import { DatePicker } from "zaman";
import Image from "next/image";

import styles from "./UserForm.module.css";

function UserForm() {
  return (
    <div className={styles.inputs}>
      <input type="text" placeholder="نام و نام خانوادگی" />
      <input type="text" placeholder="کد ملی" />
      <label>
        <Image
          src="/images/calendar-3.png"
          width={16}
          height={16}
          alt="torino logo"
        />
        تاریخ تولد
      </label>
      <DatePicker onChange={(e) => console.log(e.value)} />
      <select name="gender" id="gender">
        <option value="">جنسیت</option>
        <option value="male">مرد</option>
        <option value="female">زن</option>
      </select>
    </div>
  );
}

export default UserForm;
