import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";

const About = () => {
  return (
    <div className={styles.main}>
      <section className={styles.wrapper}>
        <h2>
          Justplay<br></br> pensa solo a giocare
        </h2>
        <p>
          Il team di sviluppo 😎 è orgoglioso di presentare l&apos;applicazione
          <strong> Just Play</strong>, una web app pensata per gli amanti dello
          sport. Con tecnologie all&apos;avanguardia come{" "}
          <strong>Next.js, React.js, MongoDB e Sass,</strong> Just Play
          semplifica l&apos;organizzazione di partite nei campi reali della tua
          città 📍, consentendoti di selezionare il tuo sport preferito con
          facilità. Che tu sia un appassionato di calcio ⚽, basket 🏀, tennis
          🥎 o pallavolo 🏐, Just Play ti mette in contatto con altri giocatori,
          offrendoti un&apos;esperienza sociale coinvolgente e divertente 🤩.
          Grazie alla sua autenticazione integrata 🔒, puoi personalizzare il
          tuo profilo e gestire la tua lista amici per una connessione ancora
          più profonda con la community Just Play. E non finisce qui: alla fine
          di ogni match, il nostro sistema di rating ⭐ valuta: Fair Play 🤝 -
          Abilità 💪 - Puntualità 🕙, garantendo un ambiente sportivo positivo e
          rispettoso per tutti 🌈.
        </p>
      </section>
      <h2>The Developers</h2>
      <section className={styles.wrapperDescription}>
        <div className={styles.containerCard}>
          <div className={styles.container}>
            <Image
              src="./giovanni_scivoli.jpg"
              alt="Giovanni Scivoli"
              width={200}
              height={170}
              className={styles.img}
            />
            <h3>Giovanni Scivoli</h3>
            <p>Full stack Developer</p>
            <div className={styles.icon}>
              <Link href="https://github.com/kirkgio92">
                <Image
                  src="./gitHub.svg"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className={styles.iconGithub}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/giovanni-scivoli-26570b14a/">
                <Image
                  src="./linkedin.svg"
                  alt="linkedin"
                  width={40}
                  height={40}
                  className={styles.iconGithub}
                />
              </Link>
            </div>
          </div>
          <div className={styles.container}>
            <Image
              src="./vincenzo_rogato.jpg"
              alt="Vincenzo Rogato"
              width={200}
              height={170}
              className={styles.img}
            />
            <h3>Vincenzo Rogato</h3>
            <p>Full stack Developer</p>
            <div className={styles.icon}>
              <Link href="https://github.com/viciorog">
                <Image
                  src="./gitHub.svg"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className={styles.iconGithub}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/vincenzo-rogato-361523279/">
                <Image
                  src="./linkedin.svg"
                  alt="linkedin"
                  width={40}
                  height={40}
                  className={styles.iconGithub}
                />
              </Link>
            </div>
          </div>

          <div className={styles.container}>
            <Image
              src="./chiara_fell.jpg"
              alt="Chiara Fell"
              width={200}
              height={170}
              className={styles.img}
            />
            <h3>Chiara Fell</h3>
            <p>Full stack Developer</p>
            <div className={styles.icon}>
              <Link href="https://github.com/chiarajf">
                <Image
                  src="./gitHub.svg"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className={styles.iconGithub}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/chiara-fell/">
                <Image
                  src="./linkedin.svg"
                  alt="linkedin"
                  width={40}
                  height={40}
                  className={styles.iconGithub}
                />
              </Link>
            </div>
          </div>

          <div className={styles.container}>
            <Image
              src="./giuseppina_liuzza.jpg"
              alt="Giuseppina Liuzza"
              width={200}
              height={170}
              className={styles.img}
            />
            <h3>Giuseppina Liuzza</h3>
            <p>Full stack Developer</p>
            <div className={styles.icon}>
              <Link href="https://github.com/PinaLiu">
                <Image
                  src="./gitHub.svg"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className={styles.iconGithub}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/giuseppinaliuzza/">
                <Image
                  src="./linkedin.svg"
                  alt="linkedin"
                  width={40}
                  height={40}
                  className={styles.iconGithub}
                />
              </Link>
            </div>
          </div>

          <div className={styles.container}>
            <Image
              src="./martina_forcieri.jpg"
              alt="Martina Forcieri"
              width={200}
              height={170}
              className={styles.img}
            />
            <h3>Martina Forcieri</h3>
            <p>Full stack Developer</p>
            <div className={styles.icon}>
              <Link href="https://github.com/MartinaForcieri">
                <Image
                  src="./gitHub.svg"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className={styles.iconGithub}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/martina-forcieri-82257b203/">
                <Image
                  src="./linkedin.svg"
                  alt="linkedin"
                  width={40}
                  height={40}
                  className={styles.iconGithub}
                />
              </Link>
            </div>
            <div></div>
          </div>

          <Link href="/">
            <Button text="Home" className={styles.button} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
