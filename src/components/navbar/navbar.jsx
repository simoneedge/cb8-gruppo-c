import Image from "next/image";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import styles from "./index.module.scss";
import Link from "next/link";
import Button from "../button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.Navbar}>
        <Hamburger
          className={styles.hamburger}
          toggled={isOpen}
          toggle={setOpen}
          onClick={handleClick}
        />
        <Image src="/logo.png" width={95} height={60} alt="logo" />
      </nav>
      {isOpen && (
        <div className={`${styles.menu} ${styles.open}`}>
          <ul className={styles.lists}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={styles.lists}
            >
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
                <Button text="About" className={styles.navbarButton} />
              </Link>
            </motion.div>
          </ul>
        </div>
      )}
    </>
  );
}
