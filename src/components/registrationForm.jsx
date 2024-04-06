// import styles from "@/index.module.css";
import { firebaseApp, firebaseAuth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

const RegistrationForm = () => {
  // User data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [img, setImg] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");

  // UI data
  const [error, setError] = useState("");
  const [onSuccess, setOnSuccess] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      console.log(
        "User with email " +
          userCredential.user.email +
          " successfully registered."
      );
      setError("");
      setOnSuccess(true);
      // if all goes ok, then save user into the mongodb collection (via API call)
      try {
        /* Bisogna fare chiamare l'API per creare un utente (una POST) con questo oggetto: */
        const data = {
          name: firstName,
          surname: lastName,
          username: username,
          img: img,
          birthdate: birthDate,
          email: email,
          location: city,
        };

        fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                "Qualcosa è andato storto..." + response.statusText
              );
            }
            return response.json();
          })
          .then((data) => {
            console.log("Risposta dal server: " + data);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (e) {
        console.log(`An error occurred while saving user '${email}' : ${e}`);
      }
    } catch (error) {
      setError(`L'utente con email '${email}' è già registrato`);
      setOnSuccess(false);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(
        `An error occurred while registering user with email '${email}': code= ${errorCode}, message=${errorMessage}`
      );
    }
  };

  return (
    <div>
      <h2>Registrazione Utente</h2>
      {<div>{error.length > 0 ? error : ""}</div>}
      {<div>{onSuccess && `Utente ${email} registrato con successo`}</div>}
      <form onSubmit={handleRegister}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Cognome:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Data di nascita:</label>
          <input
            type="text"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="image"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Città:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit">Registrati</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
