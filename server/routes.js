const { resolve } = require('path')
const fs = require('fs')

// define the controllers directory
const folder = resolve(__dirname, './controllers')

// fetch all routes
const controllers = fs.readdirSync(folder)

// dynamically add routes to app
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
module.exports = (app) => {
  controllers.forEach(route => app.use('/api', require(`${folder}/${route}`)))
}
