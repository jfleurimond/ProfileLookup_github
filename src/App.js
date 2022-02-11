import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/jfleurimond")
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    usersString = JSON.stringify(users); 
    localStorage.setItem('test', usersString);
console.log(localStorage.getItem('test'));
  }, [users]  );

  return <p> test {users.login} </p>;
}
