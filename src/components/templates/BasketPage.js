"use client";

import Image from "next/image";
import { calculateDuration } from "@/services/convertDate";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import { Audio } from "react-loader-spinner";

import TourContext from "@/context/TourContext";
import api from "@/services/config";

import styles from "./BasketPage.module.css";
import UserForm from "@/modules/UserForm";

function BasketDetailPage({ data }) {
  const { title, price } = data;
  const { user } = useContext(TourContext);

  const [formData, setFormData] = useState({
    fullName: "",
    nationalCode: "",
    birthDate: "",
    gender: "",
  });

  const { days, nights } = calculateDuration(data.startDate, data.endDate);

  const router = useRouter();

  const fullName = `${user?.firstName} ${user?.lastName}`;

  useEffect(() => {
    if (user) {
      setFormData({
        fullName,
        nationalCode: user?.nationalCode || "",
        birthDate: user?.birthDate || "",
        gender: user?.gender || "",
      });
    }
  }, [user]);

  const basketHandler = async () => {
    try {
      const res = await api.post(`/order`, formData);
      if (res.status === 200) {
        toast.success(res.data.message);
        router.push("/profile/tours");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.basket}>
        <div className={styles.userInfo}>
          <h3>
            <Image
              src="/images/profile1.png"
              width={20}
              height={20}
              alt="torino logo"
            />
            مشخصات مسافر
          </h3>
          {!user ? (
            <div className={styles.loading}>
              <Audio
                height="50"
                width="50"
                color="#28a74540"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
              />
            </div>
          ) : (
            <div className={styles.input}>
              <UserForm />
            </div>
          )}
        </div>
        <div className={styles.tourInfo}>
          <div className={styles.name}>
            <span className={styles.tour}>{title}</span>
            <span className={styles.time}>
              {days.toLocaleString("fa-IR")} روز و{" "}
              {nights.toLocaleString("fa-IR")} شب{" "}
            </span>
          </div>
          <div className={styles.price}>
            <span className={styles.label}>قیمت نهایی</span>
            <div>
              <span className={styles.number}>
                {price.toLocaleString("fa-IR")}{" "}
              </span>
          
              <span>تومان </span>
            </div>
          </div>
          <div className={styles.basketButton}>
            <button onClick={basketHandler}>ثبت و خرید نهایی</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketDetailPage;
