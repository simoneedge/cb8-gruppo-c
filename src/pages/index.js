import Head from "next/head";
import HomePage from "@/layout";
import styles from "@/styles/Home.module.scss";
import CardSport from "@/components/cardSport";
import RegistrationForm from "@/components/registrationForm";
import SignIn from "./signIn";
import { useState } from "react";

export default function Home() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Head>
        <title>JustPlay App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {!isAuthenticated ? <SignIn auth={setIsAuthenticated} /> : <HomePage /> }      
    </>
  );
}
