import React from "react";

import styles from "./index.module.scss";
import Avatar from "boring-avatars";

const User = ({ name, username }) => {
  const user = ` ${name} ${username ? username : ""}`;

  return (
    <div className={styles.user}>
      <div className={styles.container_image}>
        <Avatar
          size={50}
          name={user}
          variant="beam"
          square={true}
          colors={["#59ce93", "#e5ffb2", "#9ff7aa"]}
        />
      </div>
      <div className={styles.details}>
        <h2 className={styles.name}>{user}</h2>
      </div>
    </div>
  );
};

export default User;
