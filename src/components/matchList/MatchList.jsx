import { useState, useEffect } from "react";

import CardMatch from "../cardMatch";

export default function MatchList() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("/api/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.data);
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
