import styles from "./index.module.scss";
import Button from "@/components/button";

export default function EditProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.container_image}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
        >
          <mask
            id=":rj:"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
          >
            <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
          </mask>
          <g mask="url(#:rj:)">
            <rect width="36" height="36" fill="#ff005b"></rect>
            <rect
              x="0"
              y="0"
              width="36"
              height="36"
              transform="translate(9 -5) rotate(219 18 18) scale(1)"
              fill="#ffb238"
              rx="6"
            ></rect>
            <g transform="translate(4.5 -4) rotate(9 18 18)">
              <path
                d="M15 19c2 1 4 1 6 0"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
              ></path>
              <rect
                x="10"
                y="14"
                width="1.5"
                height="2"
                rx="1"
                stroke="none"
                fill="#000000"
              ></rect>
              <rect
                x="24"
                y="14"
                width="1.5"
                height="2"
                rx="1"
                stroke="none"
                fill="#000000"
              ></rect>
            </g>
          </g>
        </svg>
      </div>
      <h4>Modifica i tuoi dati personali</h4>
      <form className={styles.form} action="">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Cognome" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Città" />
        <input className={styles.sport} type="text" placeholder="Sport 1" />
        <input className={styles.sport} type="text" placeholder="Sport 2" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <Button text="Salva le modifiche" />
      </form>
    </div>
  );
}
