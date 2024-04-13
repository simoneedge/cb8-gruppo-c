import { useState, useEffect } from "react";

import CardMatch from "../cardMatch";
import { getCookie } from "cookies-next";

export default function MatchList() {
  const [matches, setMatches] = useState([]);
  const selectedSport = getCookie("selectedSport");

  useEffect(() => {
    fetch("/api/matches")
      .then((res) => res.json())
      .then((data) => {
        const sportMatches = data.data.filter((match) => {
          return match.sport.includes(selectedSport);
        });
        setMatches(sportMatches);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei match:", error);
      });
  }, []);

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
    </>
  );
}
