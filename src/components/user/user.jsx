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
          colors={["#216869", "#57b288", "#c4e6c9", "#e9e9e9"]}
        />
      </div>
      <div className={styles.details}>
        <h2 className={styles.name}>{name}</h2>
      </div>
    </div>
  );
};

export default User;
