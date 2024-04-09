import styles from "./index.module.scss";
import Stadium from "@/components/stadium";
import Modal from "@/pages/modal";

export default function OrganizeMatch() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Organizza Match</h1>
        <Stadium />
        <Modal />
      </div>
    </>
  );
}
