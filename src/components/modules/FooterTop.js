import Image from "next/image";

import styles from "./FooterTop.module.css";

function FooterTop() {
  return (
    <div className={styles.container}>
      <div className={styles.footerTop}>
        <div className={styles.footerInfo}>
          <div>
            <Image
              src="/images/footerInfo1.png"
              width={121.5}
              height={110}
              alt="torino footer image"
            />
          </div>
          <div className={styles.footerInfoText}>
            <h4>بصرفه ترین قیمت</h4>
            <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید</p>
          </div>
        </div>
        <div className={styles.footerInfo}>
          <div>
            <Image
              src="/images/footerInfo2.png"
              width={121.5}
              height={110}
              alt="torino footer image"
            />
          </div>
          <div className={styles.footerInfoText}>
            <h4>پشتیبانی</h4>
            <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
          </div>
        </div>
        <div className={styles.footerInfo}>
          <div>
            <Image
              src="/images/footerInfo3.png"
              width={121.5}
              height={110}
              alt="torino footer image"
            />
          </div>
          <div className={styles.footerInfoText}>
            <h4>رضایت کاربران</h4>
            <p>رضایت بیش از 10هزار کاربر از تور های ما</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
