import styles from "./index.module.scss";

export default function Button({ text }) {
  return (
    <>
      <button className={`button ${styles.button}`}>{text}</button>
    </>
  );
}
