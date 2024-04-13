import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";
import Button from "@/components/button";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

export default function ModalMatch({ isOpen, onClose }) {
  const location = getCookie("location");
  const locationAddress = getCookie("locationAddress");
  const locationLongitude = getCookie("locationLongitude");
  const locationLatitude = getCookie("locationLatitude");

  const selectedSport = getCookie("selectedSport");

  const [sport, setSport] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [cost, setCost] = useState("");
  const [playersRequired, setPlayersRequired] = useState(0);

  const router = useRouter();
  const playersOptions = {
    "Calcio a 5": [10],
    "Calcio a 7": [14],
    "Calcio a 11": [22],
    "Tennis singolo": [2],
    "Tennis doppio": [4],
    Pallavolo: [12],
    "Basket a 3": [6],
    "Basket a 6": [12],
  };

  useEffect(() => {
    if (selectedSport) {
      setSport(selectedSport);
      setPlayersRequired(playersOptions[selectedSport]);
    }
  }, [selectedSport]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      sport,
      date,
      time: time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      cost: parseInt(cost),
      players: playersRequired[0],
      inProgress: true,
      phoneNumber: locationAddress,
      location: location,
      longitude: locationLongitude,
      latitude: locationLatitude,
    };

    try {
      const response = await fetch("/api/matches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      console.log("dati response: ===>", responseData);
      const matchID = responseData.data._id;
      router.push(`/matchDetails/${matchID}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal_match}>
      <div className={styles.modal_content}>
        <button className={styles.close_button} onClick={onClose}>
          ❌
        </button>
        <h2>Crea la tua partita</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <select
              value={sport}
              onChange={(e) => {
                setSport(e.target.value);
                setPlayersRequired(playersOptions[e.target.value]);
              }}
            >
              <option value=""></option>
              {Object.keys(playersOptions).map((sportName) => {
                if (selectedSport && sportName.includes(selectedSport)) {
                  return (
                    <option key={sportName} value={sportName}>
                      {sportName}
                    </option>
                  );
                } else if (!selectedSport) {
                  return (
                    <option key={sportName} value={sportName}>
                      {sportName}
                    </option>
                  );
                }
              })}
            </select>
          </label>
          <label>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
          </label>
          <label>
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
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="Prezzo del campo? (Opzionale)"
            />
          </label>
          <Button text="Crea la partita" className={styles.modal_button} />
        </form>
      </div>
    </div>
  );
}
