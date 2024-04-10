import styles from "./index.module.scss";

export default function CardMatch({ location, sport }) {
  return (
    <div className={styles.container}>
      <div className={styles.match}>
        <p>{location}</p>
        <p>{sport}</p>
      </div>
    </div>
  );
}
