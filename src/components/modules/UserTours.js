import TourCard from "./TourCard";
import { serverFetch } from "@/lib/serverApi";

import styles from "./UserTours.module.css";

async function UserTours() {
  const tours = await serverFetch("/user/tours");

  return (
    <div className={styles.userTours}>
      {!tours.length && <p>موردی برای نمایش وجود ندارد!</p>}
      {tours.length &&
        tours.map((tour) => <TourCard key={tour.id} data={tour} />)}
    </div>
  );
}

export default UserTours;
