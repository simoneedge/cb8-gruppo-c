import styles from "./index.module.scss";
import ClosedMatchList from "@/components/closedMatchList";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function ClosedMatch() {
  const userCookie = getCookie("userData");
  const router = useRouter();

  useEffect(() => {
    if (!userCookie) {
      router.push("/signIn");
    } else {
      router.push(`/closedMatch`);
    }
  }, [userCookie]);
  return (
    <div className={styles.container}>
      <h2>Cronologia Partite</h2>
      <ClosedMatchList />
    </div>
  );
}
