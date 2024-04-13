import styles from "./index.module.scss";
import { useRouter } from "next/router";

export default function UserCardMatch({ location, sport, _id }) {
  const Router = useRouter();

  const onHandleClick = () => {
    Router.push(`/matchDetails/${_id}`);
    console.log(_id);
  };

  return (
    <div className={styles.container} onClick={onHandleClick}>
      <div className={styles.match}>
        <p>{location}</p>
        <p>{sport}</p>
      </div>
    </div>
  );
}
