import Image from "next/image";

import styles from "./WhyUs.module.css";

function WhyUs() {
  return (
    <div className={styles.container}>
      <div className={styles.sliderText}>
        <h3>چرا تورینو؟</h3>
        <h4>تور طبیعت گردی و تاریخی</h4>
        <p>
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
          طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
          آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی
          را خریداری کنید.
        </p>
      </div>
      <div className={styles.sliderImage}>
         <Image
          src="/images/slider1.png"
          width={386}
          height={416}
          alt="torino slider"
        />
      </div>
    </div>
  );
}

export default WhyUs;
