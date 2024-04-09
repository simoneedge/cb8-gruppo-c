import styles from "./index.module.scss";
import Stadium from "@/components/stadium";
import Button from "@/components/button";

export default function OrganizeMatch() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Organizza la tua partita</h1>
        <p>
          Inserisci la città in cui vuoi giocare e seleziona la struttura
          sportiva che hai prenotato
        </p>
        <Stadium />
      </div>
      <div className={styles.fixed}>
        <h4>oppure</h4>
        <Button text="Partecipa ad un match" className={styles.orgButton} />
      </div>
    </>
  );
}
