import { Card } from "../UI/Card";
import styles from './UsersList.module.css';

export const UsersList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user, i) => (
          <li key={i + 1}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
