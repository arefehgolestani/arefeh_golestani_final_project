import Link from "next/link";

import styles from "./FooterLink.module.css";

function FooterLink() {
  return (
    <>
      <div className={styles.footerLink}>
        <h3>تورینو</h3>
        <Link href="">درباره ما</Link>
        <Link href="">تماس با ما</Link>
        <Link href="">چرا تورینو</Link>
        <Link href="">بیمه مسافرتی</Link>
      </div>
      <div className={styles.footerLink}>
        <h3>خدمات مشتریان</h3>
        <Link href="">پشتیبانی آنلاین</Link>
        <Link href="">راهنمای خرید</Link>
        <Link href="">راهنمای استرداد</Link>
        <Link href="">پرسش و پاسخ</Link>
      </div>
    </>
  );
}

export default FooterLink;
