import { v4 as uuidv4 } from "uuid";

import TourCard from "./TourCard";
import { serverFetch } from "@/lib/serverApi";

import styles from "./UserTours.module.css";

async function UserTours() {
  const tours = await serverFetch("/user/tours");

  const toursWithIds = tours.map((tour) => ({
    ...tour,
    _uuid: uuidv4(),
  }));

  return (
    <div className={styles.userTours}>
      {!tours.length && <p>موردی برای نمایش وجود ندارد!</p>}
      {tours.length &&
        toursWithIds.map((tour) => <TourCard key={tour._uuid} data={tour} />)}
    </div>
  );
}

export default UserTours;
