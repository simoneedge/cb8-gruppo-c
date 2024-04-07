import LoginForm from "@/components/loginForm";
import styles from "./index.module.css";

export default function SignIn() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
