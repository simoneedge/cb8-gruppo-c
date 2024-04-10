import styles from "./index.module.scss";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import FullHeightLayout from "@/components/fullHeightLayout/fullHeightLayout";

export default function SignUpPage() {
  const router = useRouter();
  const { msg } = router.query;
  return (
      <div className={styles.signUp}>
        {msg ? <h3 className="red">{msg}</h3> : <></>}
        <div className={styles.wrapper}>
          <Image
            src="/JustPlay.svg"
            alt="logo"
            width={300}
            height={300}
            className={styles.Image}
          />
          <div className={styles.container}>
            <h4 className={styles.title}>
              Benvenuto, inserisci i tuoi dati e inizia a giocare
            </h4>
            <form action="/api/signup" method="POST" className={styles.form}>
              <input
                minLength="4"
                name="name"
                id="nome"
                type="text"
                placeholder="Nome"
                required
              ></input>
              <input
                minLength="3"
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
                minLength="3"
                name="location"
                id="città"
                type="text"
                placeholder="Città"
                required
              ></input>
              <input
                minLength="3"
                name="sports"
                id="sport"
                type="text"
                placeholder="Sport"
                required
              ></input>
              <input
                minLength="3"
                name="email"
                id="email"
                type="text"
                placeholder="Email"
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
              <input type="submit" value="Signup" className={styles.button} />
            </form>
            <p className={styles.paragraph}>
              Se sei già iscritto, allora{" "}
              <Link href="/signIn" className={styles.link}>
                torna al login
              </Link>
            </p>
          </div>
        </div>
      </div>  );
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
