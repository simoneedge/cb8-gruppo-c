import styles from "./index.module.scss";
import Stadium from "@/components/stadium";

export default function OrganizeMatch() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Organizza Match</h1>
      <Stadium />
    </div>
  );
}
