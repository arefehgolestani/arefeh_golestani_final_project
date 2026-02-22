"use client";

import { useContext, useState } from "react";
import Image from "next/image";

import MenuSidebar from "./MenuSidebar";
import TourContext from "@/context/TourContext";

import styles from "./MobileHeader.module.css";

function MobileHeader() {
  const { showSidebar, setShowSidebar } = useContext(TourContext);

  const sidebarHandler = () => {
    setShowSidebar((showSidebar) => !showSidebar);
  };
  return (
    <div
      className={styles.mobileMenu}
      showSidebar={showSidebar}
      setShowSidebar={setShowSidebar}
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
        <button>
          <Image
            src="/images/mobileLogin.png"
            width={24}
            height={24}
            alt="torino logo"
          />
        </button>
      </div>
    </div>
  );
}

export default MobileHeader;
