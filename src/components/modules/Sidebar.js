import Image from "next/image";

import styles from "./Sidebar.module.css";
import Link from "next/link";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <Link href="">
          <Image
            src="/images/profile1.png"
            width={20}
            height={20}
            alt="torino icon"
          />
          <p>پروفایل</p>
        </Link>
      </div>

      <div>
        <Link href="">
          <Image
            src="/images/profile1.png"
            width={20}
            height={20}
            alt="torino icon"
          />
          <p>تورهای من</p>
        </Link>
      </div>
      <div>
        <Link href="" className={styles.transaction}>
          <Image
            src="/images/profile1.png"
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
