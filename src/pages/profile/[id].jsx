import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import User from "@/components/user";
import Avatar from "boring-avatars";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  const router = useRouter();
  useEffect(() => {
    if (router.query.id && decodeURIComponent(router.query.id) !== user) {
      const cleanedId = decodeURIComponent(router.query.id).trim();
      fetch(`/api/${cleanedId}`)
        .then((res) => res.json())
        .then((data) => setUser(data.data))
        .catch((error) => console.error("Error fetching user data:", error));
      console.log(user);
    }
  }, [router.query.id]);

  const calculateAverageRating = () => {
    if (user && user.ratingGames) {
      const sum = user.ratingGames.reduce(
        (acc, currentValue) => acc + currentValue,
        0
      );
      const average = sum / user.ratingGames.length;
      return average.toFixed(1);
    }
    return 0;
  };

  const getRatingColorClass = (rating) => {
    if (rating >= 7) {
      return styles.goodRating;
    } else if (rating >= 4 && rating < 6.9) {
      return styles.middleRating;
    } else {
      return styles.badRating;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperProfile}>
        {user && (
          <div className={styles.container}>
            <div className={styles.containerDetails}>
              <h2 className={styles.title}>
                {user.name} {user.surname}
              </h2>
              <h3> {user.username}</h3>
              <p>
                Sono di: <strong>{user.location}</strong>
              </p>
              <p>
                Mi piace praticare: <strong>{user.sports}</strong>
              </p>
            </div>

            <div className={styles.containerImage}>
              <Avatar
                size={150}
                name={user.username}
                variant="beam"
                colors={["#9ff7aa", "#216869", "#f4f6f5"]}
              />
            </div>
          </div>
        )}
        <div className={styles.containerRating}>
          <h2 className={styles.titleRating}>Il tuo Rating</h2>
          <p className={styles.paragraphRating}>
            Qui c&apos;è la media dei voti ricevuti durante i tuoi match
          </p>
          <h4>Fair Play 🤝 - Abilità 💪 - Puntualità 🕙</h4>
          <label
            className={`${styles.rating} ${getRatingColorClass(
              calculateAverageRating()
            )}`}
          >
            {calculateAverageRating()}
          </label>
        </div>
        <h3>I tuoi amici: </h3>
        <div className={styles.preferiti}>
          {user &&
            user.friends &&
            user.friends.map((friend, index) => (
              <User key={index} name={friend} />
            ))}
        </div>
        <Link href="/editProfile" className={styles.button}>
          Modifica Profilo
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
