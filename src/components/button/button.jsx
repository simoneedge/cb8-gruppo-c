import styles from "./index.module.scss";

export default function Button({ text, className }) {
  return (
    <>
      <button className={className}>{text}</button>
    </>
  );
}
