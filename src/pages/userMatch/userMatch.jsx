import styles from "./index.module.scss";
import UserMatchList from "@/components/userMatchList";

export default function UserMatch() {
  return (
    <div className={styles.container}>
      <h1>UserMatch</h1>
      <UserMatchList />
    </div>
  );
}
