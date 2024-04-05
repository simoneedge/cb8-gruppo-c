import Image from "next/image";
import styles from "./index.module.scss";
import { useState, useEffect } from "react";

export default function CardSport({ sport, image }) {
  return (
    <div className={styles.CardSport}>
      <img src={image} alt={sport} />
      <p className={styles.title}>{sport}</p>
    </div>
  );
}
