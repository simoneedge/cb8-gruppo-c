import styles from "./index.module.scss";
import Image from "next/image";
import BlueShield from "../../../public/Blue-shield.svg";
import RedShield from "../../../public/Red-shield.svg";
import Versus from "../../../public/Versus.svg";
import Button from "@/components/button";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MatchDetails() {
  const [playerNameBlueTeam, setPlayerNameBlueTeam] = useState("");
  const [playerNameRedTeam, setPlayerNameRedTeam] = useState("");

  const handleAddPlayer = async (team) => {
    try {
      const playerName =
        team === "team1" ? playerNameBlueTeam : playerNameRedTeam;
      // await axios.put(`/api/matches/${id}?team=${team}`, { playerName });
      await axios.put(`/api/matches/6616e5787e26ea5f2a48311f?team=${team}`, {
        playerName,
      });
      if (team === "team1") {
        setPlayerNameBlueTeam("");
      } else {
        setPlayerNameRedTeam("");
      }
    } catch (error) {
      console.error("Error adding player:", error);
    }
  };

  return (
    <>
      <div className={styles.teamFormations}>
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
      </form>
    </>
  );
}
