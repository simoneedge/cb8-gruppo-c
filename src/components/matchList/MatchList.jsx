import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import CardMatch from "../cardMatch";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import Button from "./../button";

export default function MatchList() {
  const [matches, setMatches] = useState([]);
  const [userLocation, setUserLocation] = useState("");

  const selectedSport = getCookie("selectedSport");
  const user = getCookie("userData");

  useEffect(() => {
    fetch(`/api/${user}`)
      .then((res) => res.json())
      .then((userData) => {
        const userLocation = userData.data.location;
        setUserLocation(userLocation);

        fetch("/api/matches")
          .then((res) => res.json())
          .then((data) => {
            const sportMatchesInProgress = data.data.filter((match) => {
              return (
                match.sport.includes(selectedSport) &&
                match.inProgress &&
                match.phoneNumber.includes(userLocation)
              );
            });
            setMatches(sportMatchesInProgress);
          })
          .catch((error) => {
            console.error("Errore durante il recupero dei match:", error);
          });
      })
      .catch((error) => {
        console.error(
          "Errore durante il recupero delle informazioni dell'utente:",
          error
        );
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
        <div className={styles.match_list}>
          <div className={styles.description}>
            <h1 className={styles.title}>
              Partite organizzate a {userLocation}
            </h1>
            <p>
              Trova le partite più vicine e partecipa insieme ad altri
              appassionati come te!
            </p>
          </div>
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
      )}
    </>
  );
}
