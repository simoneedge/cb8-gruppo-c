// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";

// export default function singleMatch() {
//   const router = useRouter();
//   const { id } = router.query;
//   const [match, setMatch] = useState(null);
//   const [playerNameBlueTeam, setPlayerNameBlueTeam] = useState("");
//   const [playerNameRedTeam, setPlayerNameRedTeam] = useState("");

//   const handleAddPlayer = async (team) => {
//     try {
//       const playerName =
//         team === "team1" ? playerNameBlueTeam : playerNameRedTeam;
//       await axios.put(`/api/matches/${_id}?team=${team}`, { playerName });
//       if (team === "team1") {
//         setPlayerNameBlueTeam("");
//       } else {
//         setPlayerNameRedTeam("");
//       }
//     } catch (error) {
//       console.error("Error adding player:", error);
//     }
//   };

//   useEffect(() => {
//     if (id) {
//       fetch(`/api/matches/${id}`)
//         .then((res) => res.json())
//         .then((data) => setMatch(data));
//     }
//   }, [id]);

//   return (
//     <>
//       <div className={styles.teamFormations}>
//         <div className={styles.team}>
//           <Image src={BlueShield} alt="Team Blue" width={295} height={234} />
//           <input
//             type="text"
//             value={playerNameBlueTeam}
//             onChange={(e) => setPlayerNameBlueTeam(e.target.value)}
//             placeholder="Add yourself here"
//           />
//           <button
//             onClick={() => handleAddPlayer("team1")}
//             className={styles.btnAdd}
//           >
//             Add Player
//           </button>
//         </div>
//         <div className={styles.vs}>
//           <Image
//             src={Versus}
//             alt="Versus"
//             width={195}
//             height={134}
//             className={styles.imgVs}
//           />
//           <input
//             type="text"
//             value={playerNameRedTeam}
//             onChange={(e) => setPlayerNameRedTeam(e.target.value)}
//             placeholder="Add yourself here"
//           />
//           <button
//             onClick={() => handleAddPlayer("team2")}
//             className={styles.btnAdd}
//           >
//             Add Player
//           </button>
//         </div>
//         <div className={styles.team}>
//           <Image src={RedShield} alt="Team Red" width={295} height={234} />
//         </div>
//       </div>
//       <form action="" className={styles.form}>
//         <input
//           type="text"
//           placeholder="Sport scelto"
//           className={styles.sport}
//         />
//         <input type="text" placeholder="data" />
//         <input type="text" placeholder="Orario" />
//         <input type="text" placeholder="Costo Opzionale" />
//         <input type="submit" value="Partecipa ora" className={styles.btn} />
//       </form>
//     </>
//   );
// }