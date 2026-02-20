import Link from "next/link";
import { useContext, useState } from "react";
import TourContext from "@/context/TourContext";
import Image from "next/image";

import styles from "./DropdownButton.module.css";

function DropdownButton() {
  const { mobile } = useContext(TourContext);

  const [isShow, setIsShow] = useState(false);

  const dropdownHandler = () => {
    setIsShow((isShow) => !isShow);
  };
//   window.onclick = () => {
//     setIsShow(false);
//   };

  return (
    <div className={styles.container}>
      <button className={styles.dropdown} onClick={dropdownHandler}>
        <Image
          src="/images/profile.png"
          width={20}
          height={20}
          alt="login icon"
        />
        <span className={styles.vazirFont}>{mobile}</span>
        <Image
          src="/images/arrow-down.png"
          width={20}
          height={20}
          alt="arrow icon"
        />
      </button>
      {isShow && (
        <div className={styles.dropdownBox}>
          <div className={styles.phoneNumber}>
            <div>
              <Image
                src="/images/profile1.png"
                width={16}
                height={16}
                alt="user icon"
              />
            </div>

            <span className={styles.vazirFont}>{mobile}</span>
          </div>
          <div className={styles.profile}>
            <div>
              <Image
                src="/images/profile2.png"
                width={20}
                height={20}
                alt="profile icon"
              />
            </div>
            <Link href="/profile">اطلاعات حساب کاربری</Link>
          </div>
          <div className={styles.logOut}>
            <div>
              <Image
                src="/images/logout.png"
                width={20}
                height={20}
                alt="logout icon"
              />
            </div>
            <Link href="/profile">خروج از حساب کاربری</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
