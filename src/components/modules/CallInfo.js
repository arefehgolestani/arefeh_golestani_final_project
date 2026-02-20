import Image from "next/image";

import styles from "./CallInfo.module.css";

function CallInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div className={styles.text}>
            <h3>خرید تلفنی از <span>تورینو</span></h3>
            <h4>به هر کجا که میخواهید !</h4>
        </div>
        <div className={styles.cartImage}>
            <Image
            src="/images/cart.png"
            width={308}
            height={225}
            alt="torino image"
          />
        </div>
      </div>
      <div className={styles.phon}>
        <div>
          <button>021-1840</button>
          <Image
            src="/images/call.png"
            width={24}
            height={24}
            alt="torino logo"
          />
        </div>
        <button className={styles.call}>اطلاعات بیشتر</button>
      </div>
    </div>
  );
}

export default CallInfo;
