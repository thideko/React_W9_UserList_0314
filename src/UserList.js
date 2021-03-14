import "./styles.css";
import React from "react";
import { usersData } from "./userData";
import { useState } from "react";
import UserItem from "./UserItem";

export default function UserList(props) {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const createUsersList = () => {
    return usersData.map((user) => {
      return (
        <li
          onClick={() => setSelectedUserId(user.id)}
          key={user.id}
          id={user.id}
          className={selectedUserId === user.id ? "selectedUser" : null}
        >
          {user.user_name}
        </li>
      );
    });
  };

  return (
    <div className="userPanel">
      <ul className="userList"> {createUsersList()} </ul>
      {selectedUserId ? (
        <UserItem selectedUser={usersData[selectedUserId - 1]} />
      ) : (
        <p> Select a user from the list</p>
      )}
    </div>
  );
}
