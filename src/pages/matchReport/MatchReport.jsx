import React from "react";
import User from "../../components/user/User";
import styles from "./index.module.scss";

export default function MatchReport() {
  const scores = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className={styles.MatchReport}>
      {Array(5)
        .fill()
        .map((_, i) => (
          <div key={i} className={styles.userScore}>
            <User />
            <div className={styles.scores}>
              <select id={`score${i}`}>
                <option value="">Voto</option>
                {scores.map((score) => (
                  <option key={score} value={score}>
                    {score}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
    </div>
  );
}
