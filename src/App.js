import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  const [loadData, setLoadData] = useState(false);

  // if (localStorage.getItem("test") === null) {
  //   setLoadData(true);
  // } else {
  //   setUsers(JSON.parse(localStorage.getItem("test")));
  // }

  // useEffect(() => {
  //   fetch("https://api.github.com/users/jfleurimond")
  //     .then((res) => res.json())
  //     .then(setUsers)
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/jfleurimond")
      .then((res) => res.json())
      .then((data) => localStorage.setItem("test", JSON.stringify(data)))
      .catch((err) => console.log(err));

    setUsers(JSON.parse(localStorage.getItem("test")));
  }, []);

  console.log(users);
  // future note to add else condition to
  // setUsers with localstorage.getItem

  // useEffect(() => {
  //   const usersString = JSON.stringify(users);
  //   localStorage.setItem("test", usersString);
  //   console.log(localStorage.getItem("test"));
  // }, [users]);

  return <p> test {users.login} </p>;
}
