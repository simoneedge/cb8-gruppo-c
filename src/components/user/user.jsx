import React from "react";
import { faker } from "@faker-js/faker";
import styles from "./index.module.scss";
import Avatar from "boring-avatars";

const User = () => {
  const name = `${faker.person.firstName()} ${faker.person.lastName()}`;

  return (
    <div className={styles.user}>
      <div className={styles.container_image}>
        <Avatar
          size={50}
          name={name}
          variant="beam"
          square={true} // false la rende tonda
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
      </div>
      <div className={styles.details}>
        <h2 className={styles.name}>{name}</h2>
      </div>
    </div>
  );
};

export default User;
