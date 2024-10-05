const express = require('express')
const path = require('path')
const chalk = require('chalk')
const db = require('./db')

const app = express()
const PORT = process.env.PORT || 8332

const createApp = () => {

  //Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }))
  app.use(express.static(path.join(__dirname, '../public')))
  
  //Routes
  app.use('/api', require('./routes/index'))

  // Catch-all route for serving index.html
  app.use('*', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')))
}

const startServer = () => {
  app.listen(PORT, () => {
    console.log(chalk.blue.bgWhite.bold(`We are live on port ${PORT}`))
  })
  .on('error', err => {
    console.error(chalk.red.bold('Error starting server:', err))
  })
}

const connectDb = () => {
  return db.sync()
  .then(() => {
    console.log(chalk.green.bgWhite.bold('Connected Database'))
  })
  .catch(err => {
    console.error('Error syncing database:', err)
  })
}

connectDb()
.then(createApp)
.then(startServer)
