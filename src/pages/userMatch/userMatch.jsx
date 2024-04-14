import styles from "./index.module.scss";
import UserMatchList from "@/components/userMatchList";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function UserMatch() {
  const userCookie = getCookie("userData");
  const router = useRouter();

  useEffect(() => {
    if (!userCookie) {
      router.push("/signIn");
    } else {
      router.push(`/userMatch`);
    }
  }, [userCookie]);
  return (
    <div className={styles.container}>
      <h2>Le mie partite</h2>
      <UserMatchList />
    </div>
  );
}
