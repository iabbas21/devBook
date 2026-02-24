const express = require('express')

const app = express()

app.use('/hello', (req, res) => {
    res.send('Hello World!')
})

app.use('/test', (req, res) => {
    res.send('Hello from the server...!')
})

app.use('/', (req, res) => {
    res.send('Welcome to dashboard page!')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})