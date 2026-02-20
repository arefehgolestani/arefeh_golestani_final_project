import Card from "./Card";
import styles from "./Tours.module.css";

function Tours({tours}) {
  return (
    <div className={styles.container}>
      <h3>همه تورها</h3>
      <div className={styles.tourCard}>
        <Card tours={tours} />
      </div>
    </div>
  );
}

export default Tours;
