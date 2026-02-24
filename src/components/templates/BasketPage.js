import Image from "next/image";

import styles from "./BasketPage.module.css";
import UserForm from "@/modules/UserForm";

function BasketPage() {
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
               <span className={styles.tour}>تور هولیر</span>
               <span className={styles.time}>5 روز و 4 شب</span>
            </div>
            <div className={styles.price}>
                <span className={styles.label}>قیمت نهایی</span>
                <div>
                    <span className={styles.number}>17,500,000</span>
                    {/* <span>{price.toLocaleString("fa-IR")}</span> */}
                    <span>تومان</span>
                </div>
            </div>
            <div className={styles.basketButton}>
                <button>ثبت و خرید نهایی</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
