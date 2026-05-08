import Banner from "@/modules/Banner";
import CallInfo from "@/modules/CallInfo";
import HomeClient from "@/templates/HomeClient";

import WhyUs from "@/modules/WhyUs";
import FooterTop from "@/modules/FooterTop";

import styles from "./page.module.css";

export default async function Home() {
  const res = await fetch("http://localhost:6500/tour", {
    cache: "no-store",
  });
  const tours = await res.json();

  return (
    <div className={styles.container}>
      <Banner />
      <HomeClient initialTours={tours} />
      <CallInfo />
      <WhyUs />
      <FooterTop />
    </div>
  );
}
