"use client";

import { useContext, useState } from "react";
import Image from "next/image";

import MenuSidebar from "./MenuSidebar";
import TourContext from "@/context/TourContext";

import styles from "./MobileHeader.module.css";
import DropdownButton from "./DropdownButton";

function MobileHeader({
  modalHandler,
  sendOtpHandler,
  checkOtpHandler,
  confirmHandler,
}) {
  const { showSidebar, setShowSidebar, isLoggedIn, isAuthChecked } =
    useContext(TourContext);

  const sidebarHandler = () => {
    setShowSidebar((showSidebar) => !showSidebar);
  };
  return (
    <div
      className={styles.mobileMenu}
    >
      {showSidebar && <MenuSidebar />}
      <div className={styles.header}>
        <button onClick={sidebarHandler}>
          <Image
            src="/images/mobileMenu.png"
            width={23}
            height={19}
            alt="torino logo"
          />
        </button>
      </div>
      <div className={styles.register}>
        {!isAuthChecked ? null : !isLoggedIn ? (
          <button onClick={modalHandler}>
            <Image
              src="/images/mobileLogin.png"
              width={24}
              height={24}
              alt="torino logo"
            />
          </button>
        ) : (
          <DropdownButton />
        )}
      </div>
    </div>
  );
}

export default MobileHeader;
