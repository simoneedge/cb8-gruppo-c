import Styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

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
      <h1 className={Styles.title}>Profilo</h1>
      {userData && (
        <>
          <p>
            nome:{userData.name} cognome {userData.surname}
          </p>
          <p>username:{userData.username}</p>
          <p>città:{userData.location}</p>
          <p>ratingGames:{userData.ratingGames}</p>
          <p>ruolo:{userData.roles}</p>
          <p>sport:{userData.sports}</p>
        </>
      )}
    </div>
  );
}
