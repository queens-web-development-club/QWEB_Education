const { ObjectId, MongoClient } = require("mongodb");
const express = require('express')
const { body, validationResult } = require('express-validator');

// Setup mongo
const uri = "mongodb+srv://qweb:password@url.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const database = client.db('qweb');
const collection = database.collection("events");

// Get router object (initialized in app.js)
const app = express.Router();

app.get("/newest", async (req, res) => {
    // Get the most recent event
    const event = await collection.findOne({}, {sort: {date: -1}});
    if (!event) {
        return res.status(400).json({ error: "Event not found" });
    }
    return res.json(event);
})

app.get("/:id", async (req, res) => {
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

app.get("/", async (req, res) => {
    // Get all events
    const events = await collection.find({}).toArray();
    res.send(events);
})

app.post(
    "/",
    body("name").isLength({max: 50}),
    body("description").isLength({max: 200}),
    body("date").isISO8601(),
    body("location").isLength({max: 50}),
    body("price").isLength({max: 10}),
    body("spaces").isInt(),
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
            spaces: req.body.spaces,
        }
        await collection.insertOne(data);

        return res.json(data);
    });

module.exports = app;