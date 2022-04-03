import "./styles.css";
import { useState, useEffect } from "react";
import Card from "./card";

export default function App() {
  const [users, setUsers] = useState([""]);
  const [value, setValue] = useState([]);

  const addProfile = (e) => {
    e.preventDefault();

    fetch(`https://api.github.com/users/${value}`)
      .then((res) => res.json())
      .then((data) => localStorage.setItem("test", JSON.stringify(data)))
      .catch((err) => console.log(err));

    users
      ? setUsers([...users, JSON.parse(localStorage.getItem("test"))])
      : setUsers(JSON.parse(localStorage.getItem("test")));

    setValue("");

    //must save value in users
  };

  console.log(users);

  useEffect(() => {
    const usersString = JSON.stringify(users);
    localStorage.setItem("test", usersString);
  }, [users]);

  return (
    <div classname="main">
      <form onSubmit={addProfile}>
        <input
          className="todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button> Add </button>
      </form>

      <Card />

      <> {users.login} </>
    </div>
  );
}
