import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "process.env.FIREBASE_KEY",
  authDomain: "justplay-419212.firebaseapp.com",
  projectId: "justplay-419212",
  storageBucket: "justplay-419212.appspot.com",
  messagingSenderId: "768864592271",
  appId: "1:768864592271:web:d672d9efa03454f43eabfa",
};
const app = initializeApp(firebaseConfig);
