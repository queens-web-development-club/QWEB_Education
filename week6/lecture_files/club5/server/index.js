const Koa = require('koa')
const router = require('@koa/router')()
const fs = require('fs')
const cors = require('@koa/cors')

const app = new Koa()

let events = []

function getEvents() {
  events = JSON.parse(fs.readFileSync('events.json')).sort((a, b) => {
    return new Date(a.date) - new Date(b.date)
  })
}
getEvents()

fs.watchFile('events.json', getEvents)

router.get('/events', async (ctx) => {
  ctx.body = events
})

app.use(cors())
app.use(router.routes())

console.log('Running on port 3001.')
app.listen(3001)
