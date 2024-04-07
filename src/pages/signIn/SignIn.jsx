import LoginForm from "@/components/loginForm";
import styles from "./index.module.scss";

export default function SignIn({ auth }) {
  return (
    <div className={styles.container}>
      <LoginForm setIsAuthenticated={auth} />
    </div>
  );
}
