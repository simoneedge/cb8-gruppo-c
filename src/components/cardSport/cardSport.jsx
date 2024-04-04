import Image from "next/image";
import styles from "./index.module.scss";

export default function CardSport() {
  return (
    <div className={styles.CardSport}>
      <img
        src="https://img.freepik.com/free-photo/tennis-balls-ground_23-2148208273.jpg?w=1380&t=st=1712230079~exp=1712230679~hmac=3b25ff756fbfb89ddb6229afd01c3285dd64cffcb6ccd84c41ad8c0c34ac195d"
        alt="tennis"
      />
    </div>
  );
}
