import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWKVTZruDLINwIGOFDWlsthzl0Wz7aRWQ",
  authDomain: "justplay-419212.firebaseapp.com",
  projectId: "justplay-419212",
  storageBucket: "justplay-419212.appspot.com",
  messagingSenderId: "768864592271",
  appId: "1:768864592271:web:d672d9efa03454f43eabfa"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
//export default app;
