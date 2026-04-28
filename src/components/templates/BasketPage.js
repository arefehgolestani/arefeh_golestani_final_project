"use client";

import Image from "next/image";
import { calculateDuration } from "@/services/convertDate";
import {  toast } from "react-toastify";
import { useRouter } from "next/navigation";

import api from "@/services/config";

import styles from "./BasketPage.module.css";
import UserForm from "@/modules/UserForm";

async function BasketDetailPage({ data }) {
  const { id, title, price } = data;

  const { days, nights } = calculateDuration(data.startDate, data.endDate);

  const router = useRouter()

  const basketHandler = async () => {
    // const data = await api.put(`/basket/${id}`);
    // console.log(data);
    // if (data.status === 201) {
    //   toast.success(data.data.message);
    //   router.push("/");
    // }
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
          <div className={styles.input}>
            <UserForm />
          </div>
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
              {/* <span>{price.toLocaleString("fa-IR")}</span> */}
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
