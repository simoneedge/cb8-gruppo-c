import styles from "./index.module.scss";
import { getCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "./../../../public/JustPlay.svg";

export default function SignUpPage() {
  const handleBtnClick = () => {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value;
    setCookie("userData", username);
  };

  const router = useRouter();
  const { msg } = router.query;
  return (
    <div className={styles.wrapper}>
      {msg ? <h3 className="red">{msg}</h3> : <></>}
      <Link href="/" className={styles.logo}>
        <Image src={logo} width={240} height={"auto"} alt="logo" />
      </Link>
      <div className={styles.container}>
        <h4 className={styles.title}>
          Ciao, inserisci i tuoi dati e inizia a giocare
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
          <input
            type="submit"
            value="Signup"
            onClick={handleBtnClick}
            className={styles.button}
          />
        </form>
        <p className={styles.paragraph}>
          Se sei già iscritto, allora{" "}
          <Link href="/signIn" className={styles.link}>
            torna al login
          </Link>
        </p>
        <footer>
          <Link href="/about" className={styles.paragraph2}>
            Made with stubborn love ❤️{" "}
          </Link>
        </footer>
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
