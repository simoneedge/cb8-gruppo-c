import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import BlueShield from "../../../public/Blue-shield.svg";
import RedShield from "../../../public/Red-shield.svg";
import Versus from "../../../public/Versus.svg";
import styles from "./index.module.scss";
import { getCookie } from "cookies-next";
import ModalReport from "@/components/modalReport";
import User from "@/components/user";

export default function SingleMatch() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [match, setMatch] = useState(null);
  const [friendsList, setFriendsList] = useState([]);
  const playerName = getCookie("userData");
  const [isFriendAlready, setIsFriendAlready] = useState(false);

  const playerExists =
    match &&
    (match.team1.includes(playerName) || match.team2.includes(playerName));

  useEffect(() => {
    const fetchMatchDetails = async (matchId) => {
      try {
        const response = await fetch(`/api/matches/${matchId}`);
        const data = await response.json();
        setMatch(data.data);
      } catch (error) {
        console.error("Error fetching match details:", error);
      }
    };

    if (!playerName) {
      router.push("/signIn");
    } else if (id) {
      fetchMatchDetails(id);
    }
  }, [id, playerName, router]);

  const maxPlayersPerTeam = match ? Math.ceil(match.players / 2) : 0;
  const blueTeamIsFull = match && match.team1.length >= maxPlayersPerTeam;
  const redTeamIsFull = match && match.team2.length >= maxPlayersPerTeam;

  const handleAddPlayer = async (team) => {
    try {
      if (!playerName) {
        console.error("Player name not found in cookie");
        return;
      }

      await axios.put(`/api/matches/${id}?team=${team}`, { playerName });
      setMatch((prevMatch) => ({
        ...prevMatch,
        [team]: [...prevMatch[team], playerName],
      }));

      const playerExists = match && match[team].includes(playerName);
      if (playerExists) {
        console.error("Player already exists in the team");
        return;
      }
    } catch (error) {
      console.error("Error adding player:", error);
    }
  };

  const toogleInProgress = async () => {
    try {
      const switchInProgress = !(match && match.inProgress);
      const team = "team1";
      const playerName = getCookie("userData");

      if (!playerName) {
        console.error("Player name not found in cookie");
        return;
      }

      await axios.put(
        `/api/matches/${id}?inProgress=${switchInProgress}&team=${team}`,
        { playerName }
      );
      setMatch((prevMatch) => ({
        ...prevMatch,
        inProgress: switchInProgress,
      }));
      setIsModalOpen(false);
      router.push("/");
    } catch (error) {
      console.error("Error updating match in progress:", error);
    }
  };

  useEffect(() => {
    const fetchFriendsList = async () => {
      try {
        const response = await fetch(`/api/${playerName}`);
        const data = await response.json();
        setFriendsList(data.data.friends);
      } catch (error) {
        console.error("Error fetching friends list:", error);
      }
    };

    if (playerName) {
      fetchFriendsList();
    }
  }, [playerName]);

  const handleAddFriends = async (player) => {
    try {
      if (!playerName) {
        console.error("Player name not found in cookie");
        return;
      }

      console.log(playerName, player);
      if (friendsList.includes(player)) {
        console.log(player);
        alert("Questo giocatore è già tuo amico!");
        return;
      }

      const data = {
        newFriends: [player],
      };
      console.log(data);

      await axios.put(`/api/${playerName}`, data);
    } catch (error) {
      console.error("Error adding friend:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const greyOutIfAlreadyFriend = () => {
    if (friendsList.includes(playerName)) {
      setIsFriendAlready(true);
    }
  };

  useEffect(() => {
    greyOutIfAlreadyFriend();
  }, [friendsList, playerName]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.match}>
        <div className={styles.match_content}>
          <div className={styles.teams}>
            <div className={styles.team1}>
              <Image
                src={BlueShield}
                alt="Team Blue"
                width={295}
                height={234}
                className={styles.img}
              />
              {match &&
                match.team1.map((player, index) => (
                  <div key={index} className={styles.userAction}>
                    <User name={player} />
                    <button
                      className={styles.button}
                      onClick={() => {
                        handleAddFriends(player);
                      }}
                      disabled={
                        player === playerName || friendsList.includes(player)
                      }
                    >
                      ⭐
                    </button>
                  </div>
                ))}
              <button
                onClick={() => handleAddPlayer("team1")}
                className={styles.btnAdd}
                disabled={blueTeamIsFull || playerExists}
              >
                ALFA
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
            </div>
            <div className={styles.team2}>
              <Image
                src={RedShield}
                alt="Team Red"
                width={295}
                height={234}
                className={styles.img}
              />
              {match &&
                match.team2.map((player, index) => (
                  <div key={index} className={styles.userAction}>
                    <User name={player} />

                    <button
                      className={styles.button}
                      onClick={() => {
                        handleAddFriends(player);
                      }}
                      disabled={
                        player === playerName || friendsList.includes(player)
                      }
                    >
                      ⭐
                    </button>
                  </div>
                ))}
              <button
                onClick={() => handleAddPlayer("team2")}
                className={styles.btnAdd}
                disabled={redTeamIsFull || playerExists}
              >
                OMEGA
              </button>
            </div>
          </div>

          <div className={styles.detailMAtch}>
            <h2>{match && match.sport}</h2>
            <h3>{match && match.location}</h3>
            <p>{match && match.phoneNumber}</p>
            <p>{match && formatDate(match.date)}</p>
            <p>{match && match.time}</p>
            <div>
              <div>
                <iframe
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps/embed/v1/place?key=${
                    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                  }&q=${encodeURIComponent(match && match.phoneNumber)}`}
                ></iframe>
              </div>
            </div>
          </div>
          <div className={styles.endButton}>
            <button
              className={styles.endMatch}
              onClick={toogleInProgress}
              disabled={!match || !match.inProgress}
            >
              {match && match.inProgress
                ? "Termina partita"
                : "Partita terminata"}
            </button>
            {(!match || match.inProgress) && (
              <button className={styles.report} onClick={handleOpenModal}>
                Pagelle
              </button>
            )}
            {isModalOpen && <ModalReport onClose={handleCloseModal} />}
          </div>
        </div>
      </div>
    </>
  );
}
