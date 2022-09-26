import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nameDelete, setNameDelete] = useState("");

  useEffect(() => {
    callBackendAPI()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  });

  async function callBackendAPI() {
    const response = await fetch("/backend");
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    var names = [];
    for (var key in body) {
      names.push(body[key].name + ", ");
    }
    return names;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const person = {
      name: name,
      age: age,
    };

    fetch("http://localhost:5000/backend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    }).then((res) => console.log(res));
  };

  const deleteName = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/backend", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: nameDelete }),
    }).then((res) => console.log(res));
  };

  return (
    <div className="App">
      <header className="App=header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to react</h1>
      </header>
      <p className="App-intro">{data}</p>
      <h2>I also want to shoutout:</h2>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            name="age"
            type="number"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h2>Nevermind, don't want to shoutout this guy:</h2>
      <form onSubmit={deleteName}>
        <label>
          Name:
          <input
            name="deleteName"
            type="text"
            required
            onChange={(e) => setNameDelete(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
