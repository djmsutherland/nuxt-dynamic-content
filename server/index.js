const express = require('express')
const consola = require('consola')
const cors = require('cors')
const morgan = require('morgan')
const parser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
const database = require('./database')
const routes = require('./routes')

config.dev = !(process.env.NODE_ENV === 'production')

// connect to database
database()

// use express middleware
app.use(morgan('combined'))
app.use(parser.json())
app.use(cors())

// use routes
routes(app)

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
