import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import Avatar from "boring-avatars";
import User from "@/components/user";
import Link from "next/link";

export default function Profile() {
  const [userData, setUserData] = useState("");
  const user = getCookie("userData");

  useEffect(() => {
    fetch(`/api/${user}`)
      .then((res) => res.json())
      .then((data) => setUserData(data.data));
  }, [user]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperProfile}>
        {userData && (
          <div className={styles.container}>
            <div className={styles.containerDetails}>
              <h2 className={styles.title}>
                {userData.name} {userData.surname}
              </h2>
              <h3> {userData.username}</h3>
              <p>
                Città di riferimento per i match:{" "}
                <strong>{userData.location}</strong>
              </p>
              <p>
                Mi piace praticare: <strong>{userData.sports}</strong>
              </p>
            </div>
            <div className={styles.containerImage}>
              <Avatar
                size={150}
                name={userData.name + " " + userData.surname}
                variant="beam"
                colors={["#9ff7aa", "#216869", "#f4f6f5"]}
              />
            </div>
          </div>
        )}
        <div className={styles.containerRating}>
          <h2 className={styles.titleRating}>Il tuo Rating</h2>
          <p className={styles.paragraphRating}>
            Qui c'è la media dei voti ricevuti duranti i tuoi match
          </p>
          <h4 className={styles.ratingTitle}>
            Fair Play 🤝 - Abilità 💪 - Puntualità 🕙
          </h4>
          <label className={styles.rating}>{userData.ratingGames}</label>
        </div>
        <h3>I tuoi amici: </h3>

        <div className={styles.preferiti}>
          {userData &&
            userData.friends &&
            userData.friends.map((friend, index) => (
              <User key={index} name={friend} />
            ))}
        </div>
        <Link href="/editProfile" className={styles.button}>
          Modifica dati
        </Link>
      </div>
    </div>
  );
}
