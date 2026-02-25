import TourCard from "./TourCard";
import styles from "./UserTours.module.css";

async function UserTours() {
  const res = await fetch("http://localhost:6500/user/tours", {
    cache: "no-store",
  });
  const tours = await res.json();

  return (
    <div className={styles.userTours}>
      {/* {!tours.length && <p>موردی برای نمایش وجود ندارد!</p>}
      {tours.length &&
        tours.map((tour) => <TourCard key={tour.id} data={tour} />)} */}

      <TourCard />
    </div>
  );
}

export default UserTours;
