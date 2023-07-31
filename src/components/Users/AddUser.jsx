import { useState } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { ErrorModal } from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

export const AddUser = ({ handleAddUser }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!enteredUsername.trim() || !enteredAge.trim()) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username and age (non-empty values).",
      });
      return;
    } else if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    handleAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const handleChangeUsername = (event) => {
    setEnteredUsername(event.target.value);
  };

  const handleChangeAge = (event) => {
    setEnteredAge(event.target.value);
  };

  const handleCloseModal = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          handleCloseModal={handleCloseModal}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={handleChangeUsername}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={handleChangeAge}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};
