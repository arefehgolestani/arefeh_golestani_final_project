import Card from "./Card";
import styles from "./Tours.module.css";

function Tours({ tours }) {
  const list = Array.isArray(tours) ? tours : [];

  return (
    <div className={styles.container}>
      <h3>همه تورها</h3>
      {list.length === 0 ? (
        <p>موردی برای نمایش وجود ندارد</p>
      ) : (
        <div className={styles.tourCard}>
          {list.map((tour) => (
            <Card key={tour.id} data={tour} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Tours;
