const { MongoClient } = require('mongodb')
const fs = require('fs')

const password = 'qweb'

const url = `mongodb+srv://qweb:${password}@cluster0.komlk0b.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(url)
const database = client.db('club')
const collection = database.collection('events')

function addToDatabase() {
  const events = JSON.parse(fs.readFileSync('events.json', 'utf8'))

  collection.insertMany(events)
}

addToDatabase()
