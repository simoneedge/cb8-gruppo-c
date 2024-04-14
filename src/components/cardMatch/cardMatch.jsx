import styles from "./index.module.scss";
import { useRouter } from "next/router";

export default function CardMatch({ location, sport, _id }) {
  const Router = useRouter();

  const onHandleClick = () => {
    Router.push(`/matchDetails/${_id}`);
    console.log(_id);
  };

  return (
    <div className={styles.container} onClick={onHandleClick}>
      <div className={styles.match}>
        <h4>{location}</h4>
        <h4>{sport}</h4>
      </div>
    </div>
  );
}
