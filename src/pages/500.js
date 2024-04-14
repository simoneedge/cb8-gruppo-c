import Image from "next/image";
import Link from "next/link";
import Button from "../components/button";
import styles from "./../styles/404.module.scss";

export default function Custom500() {
  return (
    <div className={styles.container}>
      <Image src="/not-found.svg" alt="No matches" width={300} height={300} />
      <h1 className={styles.title}>500</h1>
      <h2 className={styles.subtitle}>Page not found</h2>
      <h3 className={styles.description}>
        Oops! Stai cercando una pagina che non esiste...
      </h3>
      <Link href="/">
        <Button text="Home" className={styles.Button} />
      </Link>
    </div>
  );
}
