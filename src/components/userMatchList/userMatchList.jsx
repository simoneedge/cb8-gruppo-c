import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import CardMatch from "../cardMatch";
import { getCookie } from "cookies-next";

export default function UserMatchList() {
  const [matches, setMatches] = useState([]);
  const user = getCookie("userData");

  useEffect(() => {
    fetch("/api/matches")
      .then((res) => res.json())
      .then((data) => {
        const userMatches = data.data.filter((match) => {
          return (
            (match.team1.includes(user) || match.team2.includes(user)) &&
            match.inProgress
          );
        });
        setMatches(userMatches);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei match:", error);
      });
  }, []);

  return (
    <div className={styles.match_list}>
      {matches.map((match) => (
        <div key={match.id} className={styles.card_match}>
          <CardMatch
            location={match.location}
            sport={match.sport}
            _id={match._id}
          />
        </div>
      ))}
    </div>
  );
}
