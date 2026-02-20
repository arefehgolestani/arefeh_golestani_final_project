import styles from "./Footer.module.css";

import CopyRight from "./CopyRight";
import FooterClient from "./FooterClient";

import FooterLink from "./FooterLink";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.footer}>
          
          <div className={styles.footerBottom}>
            <FooterLink />
            <FooterClient />
          </div>
        </div>
      </div>
      <CopyRight />
    </>
  );
}

export default Footer;
