const express = require('express')

const app = express()

app.get('/user', (req, res) => {
  try {
    throw new Error('xyz error')
    res.send('User data')
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.use('/', (err, req, res, next) => {
  if(err) {
    // Log the error (you can use a logging library here)
    res.status(500).send('Something went wrong')
  }
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})