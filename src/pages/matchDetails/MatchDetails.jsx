import styles from "./index.module.scss";
import Image from "next/image";
import BlueShield from "../../../public/Blue-shield.svg";
import RedShield from "../../../public/Red-shield.svg";
import Versus from "../../../public/Versus.svg";
import Button from "@/components/button";
import { useState, useEffect } from "react";

export default function MatchDetails() {
  return (
    <>
      <div className={styles.teamFormations}>
        <div className={styles.team}>
          <Image src={BlueShield} alt="Team Blue" width={295} height={234} />
        </div>
        <div className={styles.vs}>
          <Image
            src={Versus}
            alt="Versus"
            width={195}
            height={134}
            className={styles.imgVs}
          />
        </div>
        <div className={styles.team}>
          <Image src={RedShield} alt="Team Red" width={295} height={234} />
        </div>
      </div>
      <form action="" className={styles.form}>
        <input
          type="text"
          placeholder="Sport scelto"
          className={styles.sport}
        />
        <input type="text" placeholder="data" />
        <input type="text" placeholder="Orario" />
        <input type="text" placeholder="Costo Opzionale" />
        <input type="submit" value="Partecipa ora" className={styles.btn} />
      </form>
    </>
  );
}
