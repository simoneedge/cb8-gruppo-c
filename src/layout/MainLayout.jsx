import styles from "./index.module.scss";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
  const router = useRouter();

  const authentication =
    router.pathname === "/signIn" ||
    router.pathname === "/signUp" ||
    router.pathname === "/about";

  return (
    <>
      {!authentication && <Navbar />}
      <div className={styles.mainLayout}>{children}</div>
    </>
  );
};

export default MainLayout;
