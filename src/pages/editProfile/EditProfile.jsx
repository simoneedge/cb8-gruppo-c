import styles from "./index.module.scss";
import Button from "@/components/button";
import Avatar from "boring-avatars";

export default function EditProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.container_image}>
        <Avatar
          size={115}
          name="Maria Mitchell"
          variant="beam"
          colors={["#E7DD96", "#E16639", "#AD860A", "#B7023F", "#55024A"]}
        />
      </div>
      <h4>Modifica i tuoi dati personali</h4>
      <form className={styles.form} action="">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Cognome" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Città" />
        <input className={styles.sport} type="text" placeholder="Sport 1" />
        <input className={styles.sport} type="text" placeholder="Sport 2" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <Button text="Salva le modifiche" />
      </form>
    </div>
  );
}
