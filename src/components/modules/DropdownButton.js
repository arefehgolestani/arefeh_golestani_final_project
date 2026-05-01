"use client";

import Link from "next/link";
import { useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

import TourContext from "@/context/TourContext";
import Image from "next/image";

import styles from "./DropdownButton.module.css";

function DropdownButton() {
  const { user, setUser, setIsLoggedIn } = useContext(TourContext);

  const [isShow, setIsShow] = useState(false);
  const dropdownRef = useRef(null);

  const dropdownHandler = () => {
    setIsShow((isShow) => !isShow);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const router = useRouter();

  const logoutHandler = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    setUser(null);
    setIsLoggedIn(false);
    toast.info("  شما از پنل کاربری خارج شدید ! ");

    router.refresh();
    router.push("/");
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button className={styles.dropdown} onClick={dropdownHandler}>
        <Image
          src="/images/profile.png"
          width={20}
          height={20}
          alt="login icon"
        />
        <span className="vazirFont">{user.mobile}</span>
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

            <span className={styles.vazirFont}>{user.mobile}</span>
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
            <button onClick={logoutHandler}>خروج از حساب کاربری</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
