import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

export default function CardSport({ title, image }) {
  return (
    <Link href="/organizeMatch">
      <div className={styles.CardSport}>
        <img src={image} alt={title} />
        <p className={styles.title}>{title}</p>
      </div>
    </Link>
  );
}
