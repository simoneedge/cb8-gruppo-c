import styles from "./index.module.scss";
import Link from "next/link";

export default function CardSport({ title, image, onClick }) {
  return (
    <Link href="/organizeMatch">
      <div onClick={() => onClick(title)} className={styles.CardSport}>
        <img src={image} alt={title} />
        <p className={styles.title}>{title}</p>
      </div>
    </Link>
  );
}
