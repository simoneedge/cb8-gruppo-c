import Image from "next/image";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import styles from "./index.module.scss";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.Navbar}>
        <Hamburger toggled={isOpen} toggle={setOpen} onClick={handleClick} />
        <Image src="/logo.png" width={95} height={60} alt="logo" />
      </nav>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.lists}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/profile">
            <li>Profilo</li>
          </Link>
          <Link href="/matchDetails">
            <li>Partita in corso</li>
          </Link>
          <Link href="/organizeMatch">
            <li>Organizza partita</li>
          </Link>
          <Link href="/profile">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
