const { ObjectId, MongoClient } = require("mongodb");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");

const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())

app.use('/events', require('./events'))

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
