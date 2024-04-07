import styles from "./index.module.scss";
import Stadium from "@/components/stadium";
import Button from "@/components/button";

export default function OrganizeMatch() {
  return (
    <div className={styles.container}>
      <Button text="Partecipa ad un match" className={styles.orgButton} />
      <h1 className={styles.title}>Organizza Match</h1>
      <Stadium />
    </div>
  );
}
