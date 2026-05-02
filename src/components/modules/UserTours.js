import { v4 as uuidv4 } from "uuid";

import TourCard from "./TourCard";
import { serverFetch } from "@/lib/serverApi";

import styles from "./UserTours.module.css";

async function UserTours() {
  const tours = await serverFetch("/user/tours" , {
    cache: "no-store",
  });

  const toursWithIds = tours.map((tour) => ({
    ...tour,
    _uuid: uuidv4(),
  }));

  return (
    <div className={styles.userTours}>

      {toursWithIds.length > 0 ? (
        toursWithIds.map((tour) => <TourCard key={tour._uuid} data={tour} />)
      ) : (
        <p>موردی برای نمایش وجود ندارد!</p>
      )}
    </div>
  );
}

export default UserTours;
