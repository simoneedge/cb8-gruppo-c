import React from "react";
import Avatar from "boring-avatars";
import { faker } from "@faker-js/faker";
import styles from "./index.module.scss";

const User = () => {
  const name = `${faker.person.firstName()} ${faker.person.lastName()}`;

  return (
    <div className={styles.user}>
      <Avatar
        size={40}
        name={name}
        variant="beam"
        square={true} // false la rende tonda
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        className={styles.avatar}
      />
      <div className={styles.details}>
        <h2 className={styles.name}>{name}</h2>
      </div>
    </div>
  );
};

export default User;
