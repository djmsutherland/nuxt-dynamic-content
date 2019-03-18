const mongoose = require('mongoose')
const consola = require('consola')

// export mongodb instance
module.exports = () => {
  return mongoose
    .connect(`mongodb://localhost:27017/nuxt-dynamic-content`, { useNewUrlParser: true })
    .then(() => consola.success('Mongo connected'))
    .catch(error => consola.error('Mongo not connected: ', error))
}
