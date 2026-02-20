import Card from "./Card";
import styles from "./Tours.module.css";

async function Tours() {
  const res = await fetch("http://localhost:6500/tour", {
    cache: "no-store",
  });
  const tours = await res.json();

  return (
    <div className={styles.container}>
      <h3>همه تورها</h3>
      <div className={styles.tourCard}>
        {tours.map((tour) => (
          <Card key={tour.id} data={tour} />
        ))}
      </div>
    </div>
  );
}

export default Tours;
