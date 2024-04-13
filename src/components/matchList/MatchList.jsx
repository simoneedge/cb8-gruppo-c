import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import CardMatch from "../cardMatch";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import Button from "./../button";

export default function MatchList() {
  const [matches, setMatches] = useState([]);
  const selectedSport = getCookie("selectedSport");

  useEffect(() => {
    fetch("/api/matches")
      .then((res) => res.json())
      .then((data) => {
        const sportMatchesInProgress = data.data.filter((match) => {
          return match.sport.includes(selectedSport) && match.inProgress;
        });
        setMatches(sportMatchesInProgress);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei match:", error);
      });
  }, []);

  return (
    <>
      {matches.length === 0 ? (
        <div className={styles.container}>
          <Image
            src="/not-found.svg"
            alt="No matches"
            width={300}
            height={300}
          />
          <h2 className={styles.title}>
            Non ci sono partite in corso per questo sport <br /> Potresti
            organizzarne una tu!
          </h2>
          <Link href="/">
            <Button text="Home" className={styles.Button} />
          </Link>
        </div>
      ) : (
        matches.map((match) => (
          <CardMatch
            key={match.id}
            location={match.location}
            sport={match.sport}
            _id={match._id}
          />
        ))
      )}
    </>
  );
}
