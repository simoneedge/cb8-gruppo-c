import React from "react";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import Avatar from "boring-avatars";

const User = ({ name, username, _id }) => {
  const user = ` ${name} ${username ? username : ""}`;
  const router = useRouter();

  const onHandleClick = (e) => {
    router.push(`/profile/${user}`);
  };

  return (
    <div className={styles.containerUser} onClick={onHandleClick}>
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
    </div>
  );
};

export default User;
