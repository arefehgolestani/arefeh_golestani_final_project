import Image from "next/image";

import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/banner.png"
        width={1440}
        height={350}
        alt="torino banner"
      />
      <div className={styles.text}>
        <h1><span> تورینو </span>برگزارکننده بهترین تورهای داخلی و خارجی </h1>
      </div>
    </div>
  );
}

export default Banner;
