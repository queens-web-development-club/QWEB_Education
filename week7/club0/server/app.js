const express = require('express')
const cors = require("cors");
const fs = require('fs');

const events = JSON.parse(fs.readFileSync('events.json', 'utf8')).sort((a, b) => b.date - a.date);

const app = express()
const port = 3001

app.use(cors())

app.get("/events/:id", async (req, res) => {
    // Get event by id
    const id = req.params.id;

    const event = events.find(event => event.id === id);
    return res.json(event);
})

app.get("/events", async (req, res) => {
    return res.send(events);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

