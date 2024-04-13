import styles from "./index.module.scss";
import { getCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "./../../../public/JustPlay.svg";

export default function SignIn() {
  const handleBtnClick = () => {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value;
    setCookie("userData", username);
  };

  const router = useRouter();
  const { msg } = router.query;
  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} width={240} height={"auto"} alt="logo" />
      </Link>

      {msg ? <h3 className="red">{msg}</h3> : <></>}
      <div className={styles.container}>
        <h4 className={styles.title}>JustPlay: gioca o organizza partite</h4>
        <p className={styles.paragraph}>
          Trova e partecipa a partite vicino a te o organizza la tua. Cnnetterti
          con appassionati e scoprire nuove sfide nella tua città, effettua il
          login!
        </p>
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
          <input
            type="submit"
            value="Sign In"
            className={styles.button}
            onClick={handleBtnClick}
          />
        </form>
        <p className={styles.paragraph}>
          Non hai ancora un account?{" "}
          <Link href="/signUp" className={styles.link}>
            Iscriviti qui
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
