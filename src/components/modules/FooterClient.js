import Image from "next/image";

import styles from "./FooterClient.module.css";

function FooterClient() {
  return (
    <div className={styles.footerLogo}>
      <div className={styles.logo}>
        <Image
          src="/images/logo.png"
          width={146}
          height={44}
          alt="torino logo"
        />

        <p className="vazirFont">تلفن پشتیبانی : 8574-021</p>
      </div>

      <div className={styles.footerClient}>
        <Image
          src="/images/client1.png"
          width={74}
          height={74}
          alt="torino client logo"
        />

        <Image
          src="/images/client2.png"
          width={74}
          height={74}
          alt="torino client logo"
        />

        <Image
          src="/images/client3.png"
          width={74}
          height={74}
          alt="torino client logo"
        />

        <Image
          src="/images/samandehi.png"
          width={74}
          height={74}
          alt="torino client logo"
        />

        <Image
          src="/images/client4.png"
          width={74}
          height={74}
          alt="torino client logo"
        />
       
      </div>
    </div>
  );
}

export default FooterClient;
