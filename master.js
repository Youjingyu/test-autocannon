process.env.NODE_ENV = 'prod'

const Koa = require('koa')
const json = require('koa-json')
const cors = require('@koa/cors')
const router = require('./router/routes')
const config = require('./config')

const server = new Koa()

server.use(json()).use(cors())
server.use(router.routes()).use(router.allowedMethods())

const port = config.port
const hostname = config.hostname
server.listen(port, hostname, () => {
  console.log(`online: server started at: http://${hostname}:${port}`)
})
