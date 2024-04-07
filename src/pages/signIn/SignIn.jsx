import LoginForm from "@/components/loginForm";
import styles from "./index.module.scss";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
