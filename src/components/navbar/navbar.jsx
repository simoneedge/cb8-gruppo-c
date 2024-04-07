import Image from "next/image";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import styles from "./index.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../button";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <nav className={styles.Navbar}>
        <Hamburger
          className={styles.hamburger}
          toggled={isOpen}
          toggle={setOpen}
          onClick={handleClick}
        />
        <Link href="/">
          <Image src="/justPlay.svg" width={105} height={60} alt="logo" />
        </Link>
      </nav>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.lists}>
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
          {/* <button text="About">About</button> */}
        </ul>
      </div>
    </>
  );
}
