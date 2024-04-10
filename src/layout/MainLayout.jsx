import styles from "./index.module.scss";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useState } from "react";

const MainLayout = ({ children }) => {
  const router = useRouter();

  const authentication =
    router.pathname === "/signIn" || router.pathname === "/signUp";

  return (
    <>
      {!authentication && <Navbar />}
      <div className={styles.mainLayout}>{children}</div>
    </>
  );
};

export default MainLayout;
