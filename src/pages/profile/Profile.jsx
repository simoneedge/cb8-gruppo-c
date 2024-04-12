import Styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import Avatar from "boring-avatars";
import Button from "@/components/button";

export default function Profile() {
  const [userData, setUserData] = useState("");
  const user = getCookie("userData");

  useEffect(() => {
    fetch(`/api/${user}`)
      .then((res) => res.json())
      .then((data) => setUserData(data.data));
  }, []);
  console.log(userData);

  return (
    <div className={Styles.container}>
      {userData && (
        <div className={Styles.container_image}>
          <Avatar
            size={50}
            name={userData.name + " " + userData.surname}
            variant="beam"
            square={true}
            colors={["#216869", "#57b288", "#c4e6c9", "#e9e9e9"]}
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
        <Button text="Modifica profilo" className={Styles.button_profile} />
      </>
    </div>
  );
}
