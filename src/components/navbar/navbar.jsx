import Image from "next/image";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import styles from "./index.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../button";
import { motion } from "framer-motion";
import logo from "./../../../public/JustPlay.svg";
import { setCookie } from "cookies-next";

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

  const clearCookie = () => {
    setCookie("userData", "");
  };

  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.navbarContainer}>
          <Hamburger
            className={styles.hamburger}
            toggled={isOpen}
            toggle={setOpen}
            onClick={handleClick}
          />
          <Link href="/">
            <Image src={logo} width={140} height={60} alt="logo" />
          </Link>
          {isOpen && (
            <div className={`${styles.menu} ${styles.open}`}>
              <ul className={styles.lists}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={styles.listsDetail}
                >
                  <Link href="/profile">
                    <li>Profilo</li>
                  </Link>
                  <Link href="/editProfile">
                    <li>Modifica Profilo</li>
                  </Link>
                  <Link href="/userMatch">
                    <li>Le mie partite</li>
                  </Link>
                  <Link href="/api/logout" onClick={clearCookie}>
                    Logout
                  </Link>
                  <Link href="/profile">
                    <Button text="About" className={styles.navbarButton} />
                  </Link>
                </motion.div>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
