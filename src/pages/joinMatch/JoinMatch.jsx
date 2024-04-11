// import styles from "./index.module.scss";
// import { useState, useEffect } from "react";
// import CardMatch from "@/components/cardMatch";

// export default function JoinMatch() {
//   const [matches, setMatches] = useState([]);

//   useEffect(() => {
//     fetch("/api/matches")
//       .then((res) => res.json())
//       .then((data) => {
//         setMatches(data.data);
//       });
//   }, []);

//   return (
//     <div className={styles.container}>
//       <form action="">
//         <input
//           type="text"
//           name=""
//           id=""
//           placeholder="Ricerca partita nella città"
//         />
//       </form>
//       <h5 className={styles.title}>Scegli partecipanti: </h5>
//       {matches.map((match) => (
//         <CardMatch
//           key={match.id}
//           location={match.location}
//           sport={match.sport}
//         />
//       ))}
//     </div>
//   );
// }
