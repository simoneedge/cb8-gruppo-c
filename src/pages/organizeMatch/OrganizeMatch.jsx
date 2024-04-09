import styles from "./index.module.scss";
import Stadium from "@/components/stadium";
import Modal from "@/pages/modal";

export default function OrganizeMatch() {
  return (
    <>
      <div className={styles.container}>
<<<<<<< HEAD
        <h1 className={styles.title}>Organizza Match</h1>
        <Stadium />
        <Modal />
=======
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
>>>>>>> a64140659a1e18f3e6fea635205c171709e7b7f5
      </div>
    </>
  );
}
