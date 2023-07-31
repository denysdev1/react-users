import React, { useState } from "react";
import { AddUser } from "./components/Users/AddUser";
import { UsersList } from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const handleAddUser = (username, age) => {
    setUsers((prevUsers) => [...prevUsers, { name: username, age }]);
  };

  return (
    <div>
      <AddUser handleAddUser={handleAddUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
