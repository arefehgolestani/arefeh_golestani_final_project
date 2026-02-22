"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import TourContext from "@/context/TourContext";

import styles from "./MenuSidebar.module.css";

function MenuSidebar() {
  const { showSidebar, setShowSidebar } = useContext(TourContext);

  const closeHandler = () => {
    setShowSidebar((showSidebar) => !showSidebar);
  };

  return (
    <div className={styles.sidebarContainer}>
      <button className={styles.close} onClick={closeHandler}>
        <Image src="/images/add.png" width={34} height={34} alt="torino logo" />
      </button>
      <div className={styles.sidebar}>
        <ul>
          <li>
            <Link href="">
              <Image
                src="/images/home-2.png"
                width={16}
                height={16}
                alt="torino logo"
              />
              <span className="active">صفحه اصلی</span>
            </Link>
          </li>

          <li>
            <Link href="">
              <Image
                src="/images/airplane-square.png"
                width={16}
                height={16}
                alt="torino logo"
              />
              <span>خدمات گردشگری</span>
            </Link>
          </li>

          <li>
            <Link href="">
              <Image
                src="/images/volume-low.png"
                width={16}
                height={16}
                alt="torino logo"
              />
              <span>درباره ما</span>
            </Link>
          </li>

          <li>
            <Link href="">
              <Image
                src="/images/call2.png"
                width={16}
                height={16}
                alt="torino logo"
              />
              <span>تماس با ما</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuSidebar;
