import styles from "./index.module.scss";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function SignIn({ username }) {
  const router = useRouter();
  const { msg } = router.query;
  return (
    <div className={styles.container}>
      <Image src="/JustPlay.svg" alt="logo" width={300} height={300} />

      {msg ? <h3 className="red">{msg}</h3> : <></>}
      <h4 className={styles.title}>Log in</h4>
      <form action="/api/login" method="POST" className={styles.form}>
        <input
          minLength="3"
          name="username"
          id="username"
          type="text"
          placeholder="Username"
          required
        ></input>
        <input
          minLength="5"
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          required
        ></input>
        <input type="submit" value="Sign In" className={styles.button} />
      </form>
      <Link href="/signUp" className={styles.link}>
        or SignUp
      </Link>
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
