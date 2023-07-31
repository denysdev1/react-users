import styles from "./Button.module.css";

export const Button = ({ type, handleClick, children }) => (
  <button
    className={styles.button}
    type={type || "button"}
    onClick={handleClick}
  >
    {children}
  </button>
);
