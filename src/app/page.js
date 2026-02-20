import Banner from "@/modules/Banner";
import CallInfo from "@/modules/CallInfo";
import Search from "@/modules/Search";
import Tours from "@/modules/Tours";
import WhyUs from "@/modules/WhyUs";
import FooterTop from "@/modules/FooterTop";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <Search />
      <Tours />
      <CallInfo />
      <WhyUs />
      <FooterTop />
    </div>
  );
}
