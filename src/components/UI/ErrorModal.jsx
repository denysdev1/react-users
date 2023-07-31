import { Button } from "./Button";
import { Card } from "./Card";
import styles from "./ErrorModal.module.css";

export const ErrorModal = ({ title, message, handleCloseModal }) => (
  <>
    <div className={styles.backdrop} onClick={handleCloseModal}></div>
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button handleClick={handleCloseModal}>Okay</Button>
      </footer>
    </Card>
  </>
);
