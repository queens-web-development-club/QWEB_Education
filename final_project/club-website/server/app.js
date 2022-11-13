const Koa = require('koa');
const router = require('@koa/router')();
const fs = require('fs');


let events = [];

function getEvents() {
    events = JSON.parse(fs.readFileSync('events.json')).sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });
}
getEvents();

fs.watchFile("events.json", getEvents)

const app = new Koa();
const port = 3001;

router.get("/events/newest", async (ctx) => {
    const event = events[0]
    if (!event) {
        ctx.status = 404;
        ctx.body = "Event not found";
        return;
    }
    ctx.body = event;
})

router.get("/events/:id", async (ctx) => {
    const id = ctx.params.id;
    const event = events.find((event) => event.id === id);
    if (!event) {
        ctx.status = 404;
        ctx.body = "Event not found";
        return;
    }
    ctx.body = event;
})

router.get("/events", async (ctx) => {
    ctx.body = events;
})


app.use(router.routes())

console.log("Running on port " + port);
app.listen(port);