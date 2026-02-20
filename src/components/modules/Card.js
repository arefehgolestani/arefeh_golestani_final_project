import Image from "next/image";

import styles from "./Card.module.css";
import Link from "next/link";

function Card({ data }) {
  const { id, title, price, option, image } = data;
  return (
    <>
      <div className={styles.card} key={id}>
        <Image src={image} width={278.44} height={159} alt="login icon" />
        <h3>{title}</h3>
        <div className={styles.Info}>
          <span>مهرماه، </span>
          <span>سه روزه، </span>
          <span>پرواز، </span>
          <span>هتل سه ستاره</span>
          <span>...</span>
        </div>
        <div className={styles.cardFooter}>
          <button>
            <Link href={`/tour/${id}`}>رزرو</Link>
          </button>
         
          <h4>
            <span> {price.toLocaleString("fa-IR")} </span> تومان
          </h4>
        </div>
      </div>
    </>
  );
}

export default Card;
