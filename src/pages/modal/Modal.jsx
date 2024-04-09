import styles from "./index.module.scss";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SportDropdown() {
  const [selectedSport, setSelectedSport] = useState(null);
  
  const sports = ['Basket', 'Calcio', 'Pallavolo', 'Tennis'];

  return (
    <select value={selectedSport} onChange={(e) => setSelectedSport(e.target.value)}>
      <option value="">Seleziona uno sport</option>
      {sports.map(sport => (
        <option key={sport} value={sport}>{sport}</option>
      ))}
    </select>
  );
}

function PlayerDropdown() {
  const [selectedPlayers, setSelectedPlayers] = useState(null);
  
  const players = [];

  return (
    <select value={selectedPlayers} onChange={(e) => setSelectedPlayers(e.target.value)}>
      <option value="">Seleziona un giocatore</option>
      {players.map(player => (
        <option key={player} value={player}>{player}</option>
      ))}
    </select>
  );

function ModalComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [cost, setCost] = useState('');

  const createMatch = () => {
    // Logica per creare la partita con i dati selezionati
  };
export default function Modal() {
  return (
    <div className={styles.modal}>
      <SportDropdown className={styles.sport} />
      <PlayerDropdown className={styles.players} />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className={styles.calendar}
      />
      <input
        type="time"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        className={styles.time}
      />
      <input
        type="text"
        placeholder="Costo"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        className={styles.costo}
      />
      <button className={styles.creaMatch - btn} onClick={createMatch}>
        Crea Partita
      </button>
    </div>
  );
}
export default Modal;