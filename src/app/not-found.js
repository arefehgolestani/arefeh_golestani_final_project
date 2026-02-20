import Image from "next/image";

import styles from "./not-found.module.css";
import Link from "next/link";

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h3>صفحه مورد نظر یافت نشد!</h3>
        <button>
          <Link href="/">بازگشت به صفحه اصلی</Link>
        </button>
      </div>
      <div>
        <Image
          src="/images/notfound.png"
          width={555}
          height={555}
          alt="torino logo"
        />
      </div>
    </div>
  );
}

export default NotFound;
