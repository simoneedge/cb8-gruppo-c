import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <section id="our-app">
        <h2>Justplay, pensa solo a giocare</h2>
        <p>
          Il team di sviluppo è orgoglioso di presentare l'applicazione Just
          Play, una web app pensata per gli amanti dello sport. Con tecnologie
          all'avanguardia come Next.js, React.js, MongoDB e Sass, Just Play
          semplifica l'organizzazione di partite nei campi reali della tua
          città, consentendoti di selezionare il tuo sport preferito con
          facilità. Che tu sia un appassionato di calcio, basket, tennis o
          altro, Just Play ti mette in contatto con altri giocatori, offrendoti
          un'esperienza sociale coinvolgente e divertente. Grazie alla sua
          autenticazione integrata, puoi personalizzare il tuo profilo e gestire
          la tua lista amici per una connessione ancora più profonda con la
          community Just Play. E non finisce qui: alla fine di ogni match, il
          nostro sistema di rating valuta il fair play, la puntualità e
          l'abilità, garantendo un ambiente sportivo positivo e rispettoso per
          tutti i partecipanti.
        </p>
      </section>

      <section id="the-developers">
        <h2>The Developers</h2>
        <div className="developer">
          <Image
            src="./chiara_fell.jpg"
            alt="Chiara Fell"
            width={200}
            height={170}
          />
          <div>
            <h3>Chiara Fell</h3>
            <p>Full stack Developer</p>
            <div>
              <a href="https://github.com/chiarajf">GitHub</a>
              <a href="https://www.linkedin.com/in/chiara-fell/">LinkedIn</a>
            </div>
          </div>
        </div>
        <Image
          src="./martina_forcieri.jpg"
          alt="Martina Forcieri"
          width={200}
          height={170}
        />
        <div>
          <h3>Martina Forcieri</h3>
          <p>Full stack Developer</p>
          <div>
            <a href="https://github.com/MartinaForcieri">GitHub</a>
            <a href="https://www.linkedin.com/in/martina-forcieri-82257b203/">
              LinkedIn
            </a>
          </div>
        </div>
        <Image
          src="./giuseppina_liuzza.jpg"
          alt="Giuseppina Liuzza"
          width={200}
          height={170}
        />
        <div>
          <h3>Giuseppina Liuzza</h3>
          <p>Full stack Developer</p>
          <div>
            <a href="https://github.com/PinaLiu">GitHub</a>
            <a href="https://www.linkedin.com/in/giuseppinaliuzza/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              LinkedIn
            </a>
          </div>
        </div>
        <Image
          src="./vincenzo_rogato.jpg"
          alt="Vincenzo Rogato"
          width={200}
          height={170}
        />
        <div>
          <h3>Vincenzo Rogato</h3>
          <p>Full stack Developer</p>
          <div>
            <a href="https://github.com/viciorog">GitHub</a>
            <a href="https://www.linkedin.com/in/vincenzo-rogato-361523279/">
              LinkedIn
            </a>
          </div>
        </div>
        <Image
          src="./giovanni_scivoli.jpg"
          alt="Giovanni Scivoli"
          width={200}
          height={170}
        />
        <div>
          <h3>Giovanni Scivoli</h3>
          <p>Full stack Developer</p>
          <div>
            <a href="https://github.com/kirkgio92">GitHub</a>
            <a href="https://www.linkedin.com/in/giovanni-scivoli-26570b14a/">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
