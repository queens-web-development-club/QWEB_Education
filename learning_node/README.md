# My Notes

## What to teach

- routing
- response and request
- GET, POST, DELETE
- Parsing
- CORS
- MongoDB Integration
- Frontend Integration (proxy, then methods)

## My steps

### Step 1: Creating Backend

First we have to download everything we need and create the backend directory

```
$ mkdir <backend_name>
$ cd <backend_name>
```

Initialize an application:

```
$ npm init
```

Following the instructions, I am changing the entry point to app.js. After that, install some dependencies, we will go over them later:

```
$ npm install express
$ npm install body-parser
$ npm install cors
```

Then we create app.js and type this out:

```js
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 5000;
var cors = require("cors");

var jsonParser = bodyParser.json();
var otherParser = bodyParser.urlencoded({ extended: true });
app.use(jsonParser);
app.use(otherParser);
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/backend", (req, res) => {
  res.send("Hello World");
});

app.post("/backend", jsonParser, (req, res) => {
  res.send("Hello World");
});

app.delete("/backend", jsonParser, (req, res) => {
  res.send("Hello World");
});
```

### Step 2: Explain Response and Request

Request is what the frontend sends
Response is what the backend sends back

For GET, request is what information you want, response is what information is returned

For POST and DELETE, request is what information you are entering, response is the status of the request (200 OK)

We use the parser to parse the requests and responses

To accept responses and requests between the backend and frontend, we need to allow communication. For now, the cors will work for backend communication.

## Step 3: MongoDB Integration

Download MongoDB community version and create the database and collection. Assume the database is for the application and collection is for all the data you will need (user info, products, etc).

Insert a document for now with the information you would store, for me it is `name` and `age`. Since this information is in JSON it will be like so:

```json
{
  "name": "Aryan",
  "age": 19
}
```

With the database created we just need the backend to connect to it.

```js
var db = null;

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/local", (err, client) => {
  if (err) throw err;

  db = client.db("learning_node");
});
```

Now, in each of the methods, we will add our logic.

For GET, we return the entire collection.

For POST, we add the name and age to the collection.

For DELETE, we delete the entry in the collection from the name.

We want to make sure we catch errors so the frontend understands. We can test these by creating requests through Postman.

```js
app.get("/backend", (req, res) => {
  db.collection("names")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

app.post("/backend", jsonParser, (req, res) => {
  console.log(req.body);
  var obj = { name: req.body.name, age: req.body.age };
  console.log(obj);
  db.collection("names").insertOne(obj, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

app.delete("/backend", jsonParser, (req, res) => {
  db.collection("names").deleteOne({ name: req.body.name }, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});
```

## Step 4: Frontend Changes

In the `package.json`, add the following line to allow the frontend to communicate with the backend.

```json
"proxy": "http://localhost:5000",
```

Then, we want to GET all the names. So we add `data` to collect the names. The `useEffect` will run the `callBackendAPI()` to send the request. We also format it properly for `data`.

```jsx
const [data, setData] = useState(null);

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

return (
  <div className="App">
    <header className="App=header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to react</h1>
    </header>
    <p className="App-intro">{data}</p>
    <h2>I also want to shoutout:</h2>
  </div>
);
```

Now we want to make the user able to add a person to shoutout using a form. We add the `name` and `age` variables for the form and use those in the request body to add.

```jsx
const [name, setName] = useState("");
const [age, setAge] = useState(0);

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
return (
   ...
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
  ...
);
```

Finally, we allow users to DELETE, or un-shoutout people. With another form.

```jsx
const [nameDelete, setNameDelete] = useState("");

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
);
```
