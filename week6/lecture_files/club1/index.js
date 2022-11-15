const Koa = require('koa')
const router = require('@koa/router')()

const app = new Koa()

router.get('/events', async (ctx) => {
  ctx.body = 'Event Information Goes Here'
})

app.use(router.routes())
app.listen(1235)
