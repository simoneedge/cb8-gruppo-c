import Image from "next/image";
import Link from "next/link";
import Button from "../components/button";
import styles from "./../styles/404.module.scss";
export default function Error() {
  return (
    <div className={styles.container}>
      <Image src="/not-found.svg" alt="No matches" width={300} height={300} />
      <h1 className={styles.title}>405</h1>
      <h3 className={styles.description}>Oops! Qualcosa è andato storto...</h3>
      <Link href="/">
        <Button text="Torna alla Home" className={styles.Button} />
      </Link>
    </div>
  );
}
