// ModalMatch.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";
import Button from "@/components/button";

const ModalMatch = ({ isOpen }) => {
  //props onClose?
  const [sport, setSport] = useState("");
  const [players, setPlayers] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const playersOptions = {
    calcio: [5, 7, 11],
    tennis: [1, 2],
    pallavolo: [6],
    basket: [3, 6],
  };

  const currentPlayersOptions = playersOptions[sport] || [];

  if (!isOpen) return null;

  return (
    <div className={styles.modal_match}>
      <div className={styles.modal_content}>
        <h2>Crea la tua partita</h2>
        <label>
          <select value={sport} onChange={(e) => setSport(e.target.value)}>
            <option value="">Seleziona lo sport</option>
            <option value="calcio">Calcio</option>
            <option value="tennis">Tennis</option>
            <option value="pallavolo">Pallavolo</option>
            <option value="basket">Basket</option>
          </select>
        </label>
        <label>
          Players
          <select value={players} onChange={(e) => setPlayers(e.target.value)}>
            {currentPlayersOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>
          Calendar data
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
        </label>
        <label>
          Orario
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
          Costo (€)
          <input type="number" />
        </label>{" "}
        {/* crea una form con action /api/matches method post */}
        <form action="/api/matches" method="post">
          <Button text="Crea Partita" className={styles.modal_button} />{" "}
        </form>
      </div>
    </div>
  );
};

export default ModalMatch;
