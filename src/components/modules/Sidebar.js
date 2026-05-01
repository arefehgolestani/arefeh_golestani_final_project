"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Sidebar.module.css";

function Sidebar() {
  const pathname = usePathname();

  const sidebarLinks = [
    { href: "/profile", label: "پروفایل", src: "/images/profile.png" },
    { href: "/profile/tours", label: "تورهای من", src: "/images/sun-fog.png" },
    {
      href: "/profile/transactions",
      label: "تراکنش ها",
      src: "/images/convert-card.png",
    },
  ];

  return (
    <div className={styles.sidebar}>
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.href;
        const itemClassName = isActive ? styles.hasBackground : "";

        return (
          <div key={link.href} className={itemClassName}>
            <Link href={link.href}>
              <Image src={link.src} width={20} height={20} alt="icon" />
              <p>{link.label}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
