"use client";

import Image from "next/image";
import { useContext } from "react";
import TourContext from "@/context/TourContext";

import styles from "./ProfileInfo.module.css";

function ProfileInfo() {
  const { user } = useContext(TourContext);
  return (
    <div className={styles.profile}>
      <div className={styles.accountInfo}>
        <p>اطلاعات حساب کاربری</p>
        <div className={styles.info}>
          <div>
            <label>شماره موبایل </label>
            <span className="vazirFont">{user?.mobile} </span>
          </div>

          <div>
            <label>ایمیل</label>
            <span>{user?.email ? <span>{user?.email}</span> : "-"} </span>
          </div>

          <div>
            <button>
              <Image
                src="/images/edit-2.png"
                width={16}
                height={16}
                alt="add email icon"
              />
              افزودن
            </button>
          </div>
        </div>
      </div>

      <div className={styles.userInfo}>
        <div className={styles.title}>
          <p>اطلاعات شخصی</p>
          <button>
            <Image
              src="/images/edit-2.png"
              width={16}
              height={16}
              alt="add email icon"
            />
            ویرایش اطلاعات
          </button>
        </div>
        <div className={styles.information}>
          <div>
            <label>نام و نام خانوادگی </label>
            <span>مانیا رحیمی</span>
          </div>
          <div>
            <label>کد ملی </label>
            <span className="vazirFont">002001545</span>
          </div>
          <div>
            <label>جنسیت </label>
            <span>زن </span>
          </div>
          <div>
            <label>تاریخ تولد </label>
            <span className="vazirFont">1374/03/18</span>
          </div>
        </div>
      </div>
      <div className={styles.bankInfo}>
        <div className={styles.title}>
          <p>اطلاعات حساب بانکی</p>
          <button>
            <Image
              src="/images/edit-2.png"
              width={16}
              height={16}
              alt="add email icon"
            />
            ویرایش اطلاعات
          </button>
        </div>
        <div className={styles.information}>
          <div>
            <label>شماره شبا </label>
            <span className="vazirFont">-</span>
          </div>
          <div>
            <label>شماره کارت </label>
            <span className="vazirFont">-</span>
          </div>
          <div>
            <label>شماره حساب </label>
            <span className="vazirFont">-</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
