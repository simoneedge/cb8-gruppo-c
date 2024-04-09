import styles from "./index.module.scss";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function SignIn({ username }) {
  const router = useRouter();
  const { msg } = router.query;
  return (
    <div className={styles.wrapper}>
      <Image
        src="/JustPlay.svg"
        alt="logo"
        width={300}
        height={300}
        className={styles.logo}
      />

      {msg ? <h3 className="red">{msg}</h3> : <></>}
      <div className={styles.container}>
        <h4 className={styles.title}>
          Ciao,<br></br> accedi per continuare
        </h4>
        <form action="/api/login" method="POST" className={styles.form}>
          <input
            minLength="3"
            name="username"
            id="username"
            type="text"
            placeholder="username"
            required
          ></input>
          <input
            minLength="5"
            name="password"
            id="password"
            type="password"
            placeholder="password"
            required
          ></input>
          <input type="submit" value="Sign In" className={styles.button} />
        </form>
        <p className={styles.paragraph}>
          Non hai ancora un account?
          <Link href="/signUp" className={styles.link}>
            Iscriviti qui
          </Link>
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  var username = getCookie("username", { req, res });
  if (username != undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  return { props: { username: false } };
}
