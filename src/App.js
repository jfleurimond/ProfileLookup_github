import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  if (localStorage.getItem("test") === null) {
    useEffect(() => {
      fetch("https://api.github.com/users/jfleurimond")
        .then((res) => res.json())
        .then(setUsers)
        .catch((err) => console.log(err));
    }, []);
  } else {
    setUsers(JSON.parse(localStorage.getItem("test")));
  }
  // future note to add else condition to
  // setUsers with localstorage.getItem

  useEffect(() => {
    const usersString = JSON.stringify(users);
    localStorage.setItem("test", usersString);
    console.log(localStorage.getItem("test"));
  }, [users]);

  return <p> test {users.login} </p>;
}
