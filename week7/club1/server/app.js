const { ObjectId, MongoClient } = require("mongodb");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");

// Create mongo client
const uri = "mongodb+srv://username:password@mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const database = client.db('qweb');
const collection = database.collection("events");

const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())

app.get("/events/:id", async (req, res) => {
    // Get event by id
    const id = req.params.id;

    // Make sure ID is valid
    let mongoId;
    try {
        mongoId = new ObjectId(id);
    } catch (e) {
        return res.status(400).json({ error: "Invalid ID" });
    }

    const event = await collection.findOne({
        _id: mongoId,
    });
    if (!event) {
        return res.status(400).json({ error: "Event not found" });
    }

    return res.json(event);
})

app.get("/events", async (req, res) => {
    // Get all events
    const events = await collection.find({}).toArray();
    res.send(events);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

