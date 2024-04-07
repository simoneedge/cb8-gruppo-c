import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
} from "firebase/auth";
import styles from "./index.module.scss";

import { firebaseApp, firebaseAuth } from "../../../utils/firebase";
import React, { useState } from "react";
import { registerNewUserToDb } from "../registrationForm";

const checkUserAuthenticatedWithGoogle = async (email, googleToken) => {
  const result = await fetch(`/api/user/${email}`, {
    method: "GET",
    headers: {
      "X-Google-Token": googleToken,
    },
  });
  const data = result.data;
  return data && true;
};

export default function LoginForm(setIsAuthenticated) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [onSuccess, setOnSuccess] = useState(null);

  const handleGoogleAuth = (userData) => {
    const provider = new GoogleAuthProvider();

    firebaseAuth.useDeviceLanguage();
    provider.setCustomParameters({
      login_hint: email,
    });

    signInWithPopup(firebaseAuth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const googleAuthToken = credential.accessToken;
        const user = result.user; // The signed-in user info.

        const additionalUserInfo = getAdditionalUserInfo(result);
        // Qui bisogna prendere le informazioni dall'account google dell'utente tramite l'oggetto additionalUserInfo,
        // se non è registrato bisogna registrarlo
        setIsAuthenticated(true);
        if (checkUserAuthenticatedWithGoogle(userData.email, googleAuthToken)) {
          console.log(
            "Utente precedentemente autenticato e registrato con Google"
          );
        } else {
          // Mostrare un popup per reperire i dati mancanti e dopo proseguire con la registrazione sul db
          // userData = {
          //     name: firstName,
          //     surname: lastName,
          //     username: username,
          //     googleToken: googleAuthToken,
          //     img: imageBase64String,
          //     birthdate: birthDate,
          //     email: email,
          //     location: city,
          //   };
          // Lasciare password vuota in caso di autenticazione google, il back-end deve gestire se lasciarne una precedentemente già inserita o fare altro.
          // const registeredUserObj = await registerNewUserToDb(userData, "");
        }
        console.log(
          `Google auth result: result=${result}, credentials=${credential}, token=${googleAuthToken}, user=${user}, additionalUserInfo=${additionalUserInfo}`
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //  const email = error.customData.email; // The email of the user's account used.
        const credential = GoogleAuthProvider.credentialFromError(error); // The AuthCredential type that was used.
        console.log(
          `An error occurred while signin in with google: credential=${credential}, error=${errorCode} ${errorMessage}`
        );
      });
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    try {
      let userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      setError("");
      setOnSuccess(true);
      console.log(`Authentication with email ${email} successful!`);
      setIsAuthenticated(true);
    } catch (error) {
      setError(`Credenziali errate.`);
      setOnSuccess(false);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(
        `Received error from firebase: code=${errorCode}, message=${errorMessage}`
      );
    }
  };

  return (
    <div className={styles.container}>
      <h2>Autenticazione Utente</h2>
      {<div>{error.length > 0 ? error : ""}</div>}
      {<div>{onSuccess && `Utente '${email}' autenticato con successo`}</div>}
      <button onClick={() => handleGoogleAuth()}>Autenticazione google</button>
      <form onSubmit={handleEmailAuth}>
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
        <button type="submit">Accedi</button>
      </form>
    </div>
  );
}
