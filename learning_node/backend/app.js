const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 5000;
var db = null;
var cors = require("cors");

const MongoClient = require("mongodb").MongoClient;
var jsonParser = bodyParser.json();
var otherParser = bodyParser.urlencoded({ extended: true });
app.use(jsonParser);
app.use(otherParser);
app.use(cors());

MongoClient.connect("mongodb://localhost:27017/local", (err, client) => {
  if (err) throw err;

  db = client.db("learning_node");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

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
