"use client"

import Image from "next/image";

import styles from "../app/not-found.module.css";
import Link from "next/link";

function Error() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h3>اتصال با سرور برقرار نیست !</h3>
        <p>لطفا بعدا دوباره امتحان کنید.</p>
      </div>
      <div>
        <Image
          src="/images/server-notfound.png"
          width={555}
          height={555}
          alt="torino logo"
        />
      </div>
    </div>
  );
}

export default Error;
