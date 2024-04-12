import MatchList from "@/components/matchList";
import Link from "next/link";

export default function MatchDetails() {
  return (
    <>
      <MatchList />
      <Link href={"/"} className="button">
        Termina partita
      </Link>
    </>
  );
}
