const { ObjectId, MongoClient } = require("mongodb");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const { body, validationResult } = require('express-validator');

// Create mongo client
const uri = "mongodb+srv://username:password@.mongodb.net/?retryWrites=true&w=majority";
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

    return res.send(events);
})

app.post(
    "/events",
    body("name").isLength({max: 50}),
    body("description").isLength({max: 200}),
    body("date").isISO8601(),
    body("location").isLength({max: 50}),
    body("price").isLength({max: 10}),
    body("spaces_left").isInt(),
    body("registered").isInt().default(0),
    async (req, res) => {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Get the data we want to insert
        const data = {
            name: req.body.name,
            description: req.body.description,
            date: new Date(req.body.date),
            location: req.body.location,
            price: req.body.price,
            spaces_left: req.body.spaces_left,
            registered: req.body.registered,
        }
        await collection.insertOne(data);

        return res.json(data);
    });

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

