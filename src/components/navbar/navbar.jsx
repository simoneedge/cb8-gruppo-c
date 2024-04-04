import Image from "next/image";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import styles from "./index.module.scss";

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
          <li>Profilo</li>
          <li>Partita in corso</li>
          <li>Organizza partita</li>
          <li>About</li>
        </ul>
      </div>
    </>
  );
}
