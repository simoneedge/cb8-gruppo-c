import CardSport from "@/components/cardSport/cardSport";
import styles from "@/styles/Home.module.scss";

export default function HomePage() {
  const handleCardClick = (title) => {
    localStorage.setItem("selectedSport", title);
  };

  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <div className={styles.header}>
          <h3>JustPlay: gioca o organizza partite!</h3>
          <p>
            Trova e partecipa a partite vicino a te o organizza la tua. Connetti
            con appassionati di sport e scopri nuove sfide!
          </p>{" "}
          <div className={styles.CardSports}>
            <CardSport
              image="./Soccer.jpg"
              title="Calcio"
              onClick={handleCardClick}
            />
            <CardSport
              image="./Tennis.jpg"
              title="Tennis"
              onClick={handleCardClick}
            />
            <CardSport
              image="./Volley.jpg"
              title="Pallavolo"
              onClick={handleCardClick}
            />
            <CardSport
              image="./Basket.jpg"
              title="Basket"
              onClick={handleCardClick}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
