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
          colors={["#216869", "#57b288", "#c4e6c9", "#e9e9e9"]}
        />
        <h4>Modifica i tuoi dati personali</h4>
      </div>
      <form className={styles.form} action="">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Cognome" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Città" />
        <input type="text" placeholder="Sport 1" />
        <input type="text" placeholder="Sport 2" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
      </form>
      <Button text="Salva le modifiche" className={styles.button} />
    </div>
  );
}
