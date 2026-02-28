const express = require('express')

const app = express()

// Handles all HTTP methods for the /user route
app.get(
  '/user', 
  (req, res, next) => {
    console.log('Route hanlder 1')
    next()
  },
  (req, res, next) => {
    console.log('Route hanlder 2')
    //res.send('Route hanlder 2')
    next()
  },
  (req, res, next) => {
    console.log('Route hanlder 3')
    //res.send('Route hanlder 3')
    next()
  },
  (req, res, next) => {
    console.log('Route hanlder 4')
    res.send('Route hanlder 4')
    //next()
  }
)

app.use('/test', (req, res) => {
  console.log('Test route handler')
  res.send('Test route handler')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})