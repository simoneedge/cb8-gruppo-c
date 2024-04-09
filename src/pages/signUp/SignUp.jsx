import styles from "./index.module.scss";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function SignUpPage({ username }) {
  const router = useRouter();
  const { msg } = router.query;
  return (
    <div className={styles.container}>
      <Image
        src="/JustPlay.svg"
        alt="logo"
        width={300}
        height={300}
        className={styles.Image}
      />
      {msg ? <h3 className="red">{msg}</h3> : <></>}
      <h4 className={styles.title}>Sign up</h4>
      <form action="/api/signup" method="POST" className={styles.form}>
        <input
          name="name"
          id="nome"
          type="text"
          placeholder="Nome"
          required
        ></input>
        <input
          name="surname"
          id="cognome"
          type="text"
          placeholder="Cognome"
          required
        ></input>
        <input
          minLength="3"
          name="username"
          id="username"
          type="text"
          placeholder="Username"
          required
        ></input>
        <input
          name="location"
          id="città"
          type="text"
          placeholder="Città"
          required
        ></input>
        <input
          name="sports"
          id="sport"
          type="text"
          placeholder="Sport"
          required
        ></input>
        <input
          name="email"
          id="email"
          type="text"
          placeholder="email"
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
        <input type="submit" value="Signup" className={styles.button} />
      </form>
      <Link href="/signIn" className={styles.link}>
        or SignIn
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
