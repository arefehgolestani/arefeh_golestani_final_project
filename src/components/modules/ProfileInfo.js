"use client";

import Image from "next/image";
import { useContext, useState } from "react";

import TourContext from "@/context/TourContext";
import EmailInput from "./EmailInput";

import styles from "./ProfileInfo.module.css";
import UserInfoInput from "./UserInfoInput";
import PaymentInfoInput from "./PaymentInfoInput";

function ProfileInfo() {
  const { user } = useContext(TourContext);

  const fullName = `${user?.firstName} ${user?.lastName}`;

  const [showEmail, setShowEmail] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showBankInfo, setShowBankInfo] = useState(false);

  const genderLabel =
    user?.gender === "male" ? "مرد" : user?.gender === "female" ? "زن" : "-";

  return (
    <div className={styles.profile}>
      <div className={styles.accountInfo}>
        <p>اطلاعات حساب کاربری</p>
        <div className={styles.info}>
          <div>
            <label>شماره موبایل </label>
            <span className="vazirFont">{user?.mobile} </span>
          </div>

          {showEmail ? (
            <EmailInput setShowEmail={setShowEmail} />
          ) : (
            <>
              <div>
                <label>ایمیل</label>
                <span>{user?.email ? <span>{user.email}</span> : "-"} </span>
              </div>

              <div>
                {user?.email ? (
                  <button onClick={() => setShowEmail(true)}>
                    <Image
                      src="/images/edit-2.png"
                      width={16}
                      height={16}
                      alt="add email icon"
                    />
                    ویرایش
                  </button>
                ) : (
                  <button onClick={() => setShowEmail(true)}>
                    <Image
                      src="/images/edit-2.png"
                      width={16}
                      height={16}
                      alt="add email icon"
                    />
                    افزودن
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {showInfo ? (
        <div className={styles.userInfo}>
          <div className={styles.title}>
            <p>ویرایش اطلاعات</p>
          </div>

          <UserInfoInput setShowInfo={setShowInfo} />
        </div>
      ) : (
        <div className={styles.userInfo}>
          <div className={styles.title}>
            <p>اطلاعات شخصی</p>
            <button onClick={() => setShowInfo(true)}>
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
              <span>{fullName ? <span>{fullName}</span> : "-"} </span>
            </div>
            <div>
              <label>کد ملی </label>
              <span className="vazirFont">
                {user?.nationalCode ? <span>{user.nationalCode}</span> : "-"}
              </span>
            </div>
            <div>
              <label>جنسیت </label>
              <span>{genderLabel ? <span>{genderLabel}</span> : "-"}</span>
            </div>
            <div>
              <label>تاریخ تولد </label>
              <span className="vazirFont">
                {user?.birthDate ? (
                  <span>
                    {new Date(user.birthDate).toLocaleDateString("fa-IR")}
                  </span>
                ) : (
                  "-"
                )}{" "}
              </span>
            </div>
          </div>
        </div>
      )}

      {showBankInfo ? (
        <div className={styles.bankInfo}>
          <div className={styles.title}>
            <p>ویرایش اطلاعات</p>
          </div>

          <PaymentInfoInput setShowBankInfo={setShowBankInfo} />
        </div>
      ) : (
        <div className={styles.bankInfo}>
          <div className={styles.title}>
            <p>اطلاعات حساب بانکی</p>
            <button onClick={() => setShowBankInfo(true)}>
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
              <span className="vazirFont">
                {user?.payment.shaba_code ? (
                  <span>{user.payment.shaba_code}</span>
                ) : (
                  "-"
                )}
              </span>
            </div>
            <div>
              <label>شماره کارت </label>
              <span className="vazirFont">
                {user?.payment.debitCard_code ? (
                  <span>{user.payment.debitCard_code}</span>
                ) : (
                  "-"
                )}
              </span>
            </div>
            <div>
              <label>شماره حساب </label>
              <span className="vazirFont">
                {user?.payment.accountIdentifier ? (
                  <span>{user.payment.accountIdentifier}</span>
                ) : (
                  "-"
                )}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileInfo;
