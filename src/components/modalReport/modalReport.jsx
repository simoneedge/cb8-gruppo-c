import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ModalReport() {
  const [match, setMatch] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetch(`/api/matches/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMatch(data.data);
      });
    console.log(match);
  });

  return (
    <div className={styles.modal_match}>
      <div className={styles.modal_content}>
        <h2>Pagelle</h2>
        <form className={styles.form}>
          <div className={styles.team1}>
            <p>Team 1:</p>
            <div>
              {match &&
                match.team1.map((player, index) => (
                  <div key={index}>
                    <p>{player}</p>
                    <select>
                      {[...Array(10).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.team2}>
            <p>Team 2:</p>
            <div>
              {match &&
                match.team2.map((player, index) => (
                  <div key={index}>
                    <p>{player}</p>
                    <select>
                      {[...Array(10).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
