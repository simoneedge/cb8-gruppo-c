import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
import User from "@/components/user";
import Button from "../../components/button";
import BlueShield from "../../../public/Blue-shield.svg";
import RedShield from "../../../public/Red-shield.svg";
import Versus from "../../../public/Versus.svg";

export default function TeamFormations() {
  const [blueTeam, setBlueTeam] = useState([]);
  const [redTeam, setRedTeam] = useState([]);

  useEffect(() => {
    const generateTeam = () => {
      return Array(5)
        .fill()
        .map(() => {
          const name = faker.person;
          const surname = faker.person;
          return { name, surname };
        });
    };

    setBlueTeam(generateTeam());
    setRedTeam(generateTeam());
  }, []);

  return (
    <>
      <div className={styles.TeamFormations}>
        <div className={styles.team}>
          <Image src={BlueShield} alt="Team Blue" width={295} height={234} />

          {(blueTeam || []).map((user, index) => (
            <User key={index} name={user.name} surname={user.surname} />
          ))}
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

          {(redTeam || []).map((user, index) => (
            <User key={index} name={user.name} surname={user.surname} />
          ))}
        </div>
      </div>{" "}
      <div className={styles.buttonContainer}>
        <Link href={"/"}>
          <Button text="Torna alla Home" className={styles.button_formation} />
        </Link>
      </div>
    </>
  );
}
