import RegistrationForm from "../../components/registrationForm";
import styles from "./index.module.scss";

const SignUpPage = () => {
  return (
    <div className={styles.container}>
      <RegistrationForm />
    </div>
  );
};

export default SignUpPage;
