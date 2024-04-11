// import styles from "./index.module.scss";
// import Image from "next/image";
// import BlueShield from "../../../public/Blue-shield.svg";
// import RedShield from "../../../public/Red-shield.svg";
// import Versus from "../../../public/Versus.svg";
import { useState, useEffect } from "react";
// import axios from "axios";
import CardMatch from "../cardMatch";

export default function MatchList() {
  const [matches, setMatches] = useState([]);
  //   const [playerNameBlueTeam, setPlayerNameBlueTeam] = useState("");
  //   const [playerNameRedTeam, setPlayerNameRedTeam] = useState("");

  useEffect(() => {
    fetch("/api/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.data);
      });
  }, []);

  //   const handleAddPlayer = async (team) => {
  //     try {
  //       const playerName =
  //         team === "team1" ? playerNameBlueTeam : playerNameRedTeam;
  //       await axios.put(`/api/matches/${_id}?team=${team}`, { playerName });
  //       if (team === "team1") {
  //         setPlayerNameBlueTeam("");
  //       } else {
  //         setPlayerNameRedTeam("");
  //       }
  //     } catch (error) {
  //       console.error("Error adding player:", error);
  //     }
  //   };

  return (
    <>
      {matches.map((match) => (
        <CardMatch
          key={match.id}
          location={match.location}
          sport={match.sport}
          _id={match._id}
        />
      ))}
      {/* <div className={styles.teamFormations}>
        <div className={styles.team}>
          <Image src={BlueShield} alt="Team Blue" width={295} height={234} />
          <input
            type="text"
            value={playerNameBlueTeam}
            onChange={(e) => setPlayerNameBlueTeam(e.target.value)}
            placeholder="Add yourself here"
          />
          <button
            onClick={() => handleAddPlayer("team1")}
            className={styles.btnAdd}
          >
            Add Player
          </button>
        </div>
        <div className={styles.vs}>
          <Image
            src={Versus}
            alt="Versus"
            width={195}
            height={134}
            className={styles.imgVs}
          />
          <input
            type="text"
            value={playerNameRedTeam}
            onChange={(e) => setPlayerNameRedTeam(e.target.value)}
            placeholder="Add yourself here"
          />
          <button
            onClick={() => handleAddPlayer("team2")}
            className={styles.btnAdd}
          >
            Add Player
          </button>
        </div>
        <div className={styles.team}>
          <Image src={RedShield} alt="Team Red" width={295} height={234} />
        </div>
      </div>
      <form action="" className={styles.form}>
        <input
          type="text"
          placeholder="Sport scelto"
          className={styles.sport}
        />
        <input type="text" placeholder="data" />
        <input type="text" placeholder="Orario" />
        <input type="text" placeholder="Costo Opzionale" />
        <input type="submit" value="Partecipa ora" className={styles.btn} />
      </form> */}
    </>
  );
}
