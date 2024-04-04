import styles from "./index.module.scss";

export default function Button() {
  return (
    <>
      <button className={`button ${styles.button}`}>Partecipa</button>
    </>
  );
}
