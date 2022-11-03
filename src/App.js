import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const storageList = JSON.parse(localStorage.getItem("usersList"))
  const [usersList, setUsersList] = useState(storageList ?? [])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      const newUsersList = [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
      const jsonUsersList = JSON.stringify(newUsersList)
      localStorage.setItem("usersList", jsonUsersList)

      return newUsersList
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
