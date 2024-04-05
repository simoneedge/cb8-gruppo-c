import styles from "./index.module.scss";
import Navbar from "@/components/navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.mainLayout}>{children}</div>
    </>
  );
};

export default MainLayout;
