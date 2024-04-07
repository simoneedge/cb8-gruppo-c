// import styles from "@/index.module.css";
import { firebaseApp, firebaseAuth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import sha256 from "../../utils/cryptoUtils";

export async function registerNewUserToDb(userData, password) {
  try {
    /* Bisogna fare chiamare l'API per creare un utente (una POST) con questo oggetto: */
    let hashedPassword = await sha256(password); // Ottengo l'hash 256 della password da salvare nel db
    userData.password = hashedPassword;

    console.log(
      "Registering user to db via API call: " + JSON.stringify(userData)
    );

    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.status >= 200 && response.status <= 204) {
          return response.json();
        } else {
          console.log("Received invalid HTTP response: " + response.statusText);
        }
      })
      .then((data) => {
        console.log("Risposta dal server: " + data);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log(
      `An error occurred while saving user '${userData.email}' : ${e}`
    );
  }
}

const RegistrationForm = () => {
  // User data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [imageBase64String, setImageBase64String] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");

  // UI data
  const [error, setError] = useState("");
  const [onSuccess, setOnSuccess] = useState(null);

  const handleFirebaseRegistration = async (e) => {
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
      const userData = {
        name: firstName,
        surname: lastName,
        username: username,
        // googleToken: "",
        // emailToken: "",
        img: imageBase64String,
        birthdate: birthDate,
        email: email,
        location: city,
      };

      const userObj = await registerNewUserToDb(userData, password);
      console.log("Registered user: " + JSON.stringify(userObj));
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

  const handleImageSelected = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageBase64String(reader.result);
      console.log(`image in base64: ${imageBase64String}`);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = (event) => {
    setImageBase64String(null);
  };

  return (
    <div className="registration-form">
      <h2>Registrazione Utente</h2>
      {<div>{error.length > 0 ? error : ""}</div>}
      {<div>{onSuccess && `Utente ${email} registrato con successo`}</div>}
      <form onSubmit={handleFirebaseRegistration}>
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
            type="file"
            accept="image/gif, image/jpeg, image/png"
            onChange={(e) => handleImageSelected(e)}
          />
          {imageBase64String && (
            <div>
              <button onClick={(e) => handleImageDelete(e)}>
                Elimina immagine
              </button>
              <img src={imageBase64String} alt="Preview" />
            </div>
          )}
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
