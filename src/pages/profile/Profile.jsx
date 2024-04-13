import Styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import Avatar from "boring-avatars";
import User from "../../components/User";
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
    <div className={Styles.container}>
      {userData && (
        <div className={Styles.container_image}>
          <Avatar
            size={50}
            name={userData.name + " " + userData.surname}
            variant="beam"
            square={true}
            colors={["#59ce93", "#e5ffb2", "#9ff7aa"]}
          />
          <div className={Styles.container_details}>
            <p>
              {userData.name} {userData.surname}
            </p>
            <p>Nickname: {userData.username}</p>
            <p>{userData.location}</p>
            <p>ratingGames:{userData.ratingGames}</p>
            <p>ruolo:{userData.roles}</p>
            <p>sport:{userData.sports}</p>
          </div>
        </div>
      )}
      <>
        <Link href="/editProfile" className={Styles.button_profile}>
          Modifica Profilo
        </Link>
      </>{" "}
      <div className={Styles.preferiti}>
        <h3>Preferiti </h3>
        {userData &&
          userData.friends &&
          userData.friends.map((friend, index) => (
            <User key={index} name={friend} />
          ))}
      </div>
    </div>
  );
}
