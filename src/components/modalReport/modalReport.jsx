import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import BlueShield from "../../../public/Blue-shield.svg";
import RedShield from "../../../public/Red-shield.svg";
import Image from "next/image";
import Avatar from "boring-avatars";

export default function ModalReport({ onClose }) {
  const [match, setMatch] = useState(null);
  const [ratings, setRatings] = useState({});
  const [disabledScores, setDisabledScores] = useState([]);
  const user = getCookie("userData");

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch(`/api/matches/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMatch(data.data);
      });
  }, [id]);

  const handleRatingChange = (index, value, player) => {
    const updatedRatings = { ...ratings };
    updatedRatings[index] = value;
    setRatings(updatedRatings);

    setDisabledScores([...disabledScores, index]);

    const newRating = parseInt(value, 10);

    fetch(`/api/${player}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newRatings: [newRating] }), // Only include the rating for the specific player
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Optionally handle response or update UI
      })
      .catch((error) => {
        console.error("Error updating user rating:", error);
        // Optionally handle error
      });
  };

  return (
    <div className={styles.modal_match}>
      <div className={styles.modal_content}>
        <button className={styles.save_button} onClick={onClose}>
          Salva
        </button>
        <button className={styles.close_button} onClick={onClose}>
          ❌
        </button>
        <h2>Pagelle</h2>
        <form className={styles.form}>
          <div className={styles.team}>
            <h3>Team 1:</h3>
            <Image src={BlueShield} alt="Team Blue" width={295} height={234} />
            <div className={styles.players}>
              {match &&
                match.team1 &&
                match.team1.map(
                  (player, index) =>
                    player !== user && (
                      <div key={index}>
                        <div className={styles.user}>
                          <div className={styles.container_image}>
                            <Avatar
                              size={50}
                              name={player}
                              variant="beam"
                              square={true} // false la rende tonda
                              colors={["#59ce93", "#e5ffb2", "#9ff7aa"]}
                            />
                          </div>
                          <div className={styles.details}>
                            <h2 className={styles.name}>{player}</h2>
                          </div>
                        </div>
                        <select
                          onChange={(e) =>
                            handleRatingChange(index, e.target.value, player)
                          }
                          value={(ratings && ratings[index]) ?? ""}
                          disabled={disabledScores.includes(index)}
                        >
                          {[...Array(10).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                              {num + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    )
                )}
            </div>
          </div>
          <div className={styles.team}>
            <h3>Team 2:</h3>
            <Image src={RedShield} alt="Team Red" width={295} height={234} />

            <div className={styles.players}>
              {match &&
                match.team2 &&
                match.team2.map(
                  (player, index) =>
                    // Exclude the user from appearing in the list
                    player !== user && (
                      <div key={index}>
                        <div className={styles.user}>
                          <div className={styles.container_image}>
                            <Avatar
                              size={50}
                              name={player}
                              variant="beam"
                              square={true} // false la rende tonda
                              colors={["#59ce93", "#e5ffb2", "#9ff7aa"]}
                            />
                          </div>
                          <div className={styles.details}>
                            <h2 className={styles.name}>{player}</h2>
                          </div>
                        </div>
                        <select
                          onChange={(e) =>
                            handleRatingChange(
                              match.team1.length + index,
                              e.target.value,
                              player
                            )
                          }
                          value={
                            (ratings && ratings[match.team1.length + index]) ??
                            ""
                          }
                          disabled={disabledScores.includes(
                            match.team1.length + index
                          )}
                        >
                          {[...Array(10).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                              {num + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    )
                )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
