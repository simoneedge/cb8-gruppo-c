// ModalMatch.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";
import Button from "@/components/button";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

const ModalMatch = ({ isOpen }) => {
  const location = getCookie("location");
  const locationAddress = getCookie("locationAddress");
  const locationPhoneNumber = getCookie("locationPhoneNumber");
  const locationLongitude = getCookie("locationLongitude");
  const locationLatitude = getCookie("locationLatitude");

  //props onClose?
  const [sport, setSport] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [cost, setCost] = useState("");
  const [playersRequired, setPlayersRequired] = useState(0); // useState per i giocatori richiesti

  const router = useRouter();
  const playersOptions = {
    "Calcio a 5": [10],
    "Calcio a 7": [14],
    "Calcio a 11": [22],
    "Tennis singolo": [2],
    "Tennis doppio": [4],
    Pallavolo: [12],
    Basket: [10],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      sport,
      date,
      time: time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      cost: parseInt(cost),
      players: playersRequired[0],
      inProgress: true,
    };
    fetch("/api/matches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    router.push("/matchDetails");
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal_match}>
      <div className={styles.modal_content}>
        <h2>Crea la tua partita</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Seleziona lo sport:
            <select
              value={sport}
              onChange={(e) => {
                setSport(e.target.value);
                setPlayersRequired(playersOptions[e.target.value]);
              }}
            >
              <option value="">Seleziona lo sport</option>
              {Object.keys(playersOptions).map((sportName) => (
                <option key={sportName} value={sportName}>
                  {sportName}
                </option>
              ))}
            </select>
          </label>
          {sport && <p>Giocatori richiesti: {playersOptions[sport]}</p>}
          <label>
            Calendar data:
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
          </label>
          <label>
            Orario:
            <DatePicker
              selected={time}
              onChange={(time) => setTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </label>
          <label>
            Costo (€):
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </label>
          <Button text="Crea Partita" className={styles.modal_button} />
        </form>
      </div>
    </div>
  );
};

export default ModalMatch;
