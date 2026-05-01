import Image from "next/image";
import Link from "next/link";

import styles from "./FooterClient.module.css";

function FooterClient() {
  const footerClients = [
    { href: "https://caa.gov.ir/", src: "/images/client1.png" },
    { href: "https://caa.gov.ir/news-archive/show/rjeqqV", src: "/images/client2.png" },
    { href: "https://ecunion.ir/", src: "/images/client3.png" },
    { href: "https://samandehi.ir/", src: "/images/samandehi.png" },
    { href: "https://www.aira.ir/", src: "/images/client4.png" },
  ];

  return (
    <div className={styles.footerLogo}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={146}
            height={44}
            alt="torino logo"
          />
        </Link>

        <p className="vazirFont">تلفن پشتیبانی : 8574-021</p>
      </div>

      <div className={styles.footerClient}>
         {footerClients.map((client) => {
          return (
            <Link href={client.href} target="_blank">
              <Image
                src={client.src}
                width={74}
                height={74}
                alt="torino logo"
              />
            </Link>
          );
        })}
       
      </div>
    </div>
  );
}

export default FooterClient;
