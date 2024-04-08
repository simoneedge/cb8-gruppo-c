import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import Image from "next/image";

import User from "../../components/user/User";
import Button from "../../components/button";
import BlueShield from "./Blue-shield.svg";
import RedShield from "./Red-shield.svg";
import Versus from "./Versus.svg";

import styles from "./index.module.scss";

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
          <Image src={Versus} alt="Versus" width={195} height={134} />
        </div>
        <div className={styles.team}>
          <Image src={RedShield} alt="Team Red" width={295} height={234} />

          {(redTeam || []).map((user, index) => (
            <User key={index} name={user.name} surname={user.surname} />
          ))}
        </div>
      </div>{" "}
      <Link href={"/"}>
        {" "}
        <a>
          <Button
            className={styles.button_formation}
            text="Salva e vai alla home"
          />
        </a>
      </Link>
    </>
  );
}
