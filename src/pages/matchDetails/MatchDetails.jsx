import MatchList from "@/components/matchList";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MatchDetails() {
  const router = useRouter();
  const userCookie = getCookie("userData");

  useEffect(() => {
    if (!userCookie) {
      router.push("/signIn");
    } else {
      router.push(`/matchDetails`);
    }
  }, [userCookie]);

  return (
    <>
      <MatchList />
      <Link href={"/"} className="button">
        Termina partita
      </Link>
    </>
  );
}
