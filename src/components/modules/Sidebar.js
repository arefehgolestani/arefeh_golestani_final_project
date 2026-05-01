import Image from "next/image";

import styles from "./Sidebar.module.css";
import Link from "next/link";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.hasBackground}>
        <Link href="/profile">
          <Image
            src="/images/profile.png"
            width={20}
            height={20}
            alt="torino icon"
          />
          <p>پروفایل</p>
        </Link>
      </div>

      <div>
        <Link href="/profile/tours">
          <Image
            src="/images/sun-fog.png"
            width={20}
            height={20}
            alt="torino icon"
          />
          <p>تورهای من</p>
        </Link>
      </div>
      <div>
        <Link href="/profile/transactions" className={styles.transaction}>
          <Image
            src="/images/convert-card.png"
            width={20}
            height={20}
            alt="torino icon"
          />
          <p>تراکنش ها</p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
