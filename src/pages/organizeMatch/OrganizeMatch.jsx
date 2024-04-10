import styles from "./index.module.scss";
import Stadium from "@/components/stadium";
import Button from "@/components/button";

//ModalMatch component
import ModalMatch from "@/components/modalOrganizeMatch";
import { useState } from "react";

export default function OrganizeMatch() {
  const [isModalOpen, setIsModalOpen] = useState(false); //prova

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Organizza la tua partita</h1>
        <p>
          Inserisci la città in cui vuoi giocare e seleziona la struttura
          sportiva che hai prenotato
        </p>
        <Stadium />
        {/* isOpen={isModalOpen} dovrebbe aprirsi al click selezionando lo stadio
        isOpen={true}  la modale compare sulla pagina  */}
        <ModalMatch isOpen={true} onClose={() => setIsModalOpen(false)} />
      </div>
      <div className={styles.fixed}>
        <h4>oppure</h4>
        <Button text="Partecipa ad un match" className={styles.orgButton} />
      </div>
    </>
  );
}
