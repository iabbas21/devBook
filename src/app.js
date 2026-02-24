const express = require('express')

const app = express()

app.use('/user', (req, res) => {
    res.send('ha ha ha')
})

app.get('/user', (req, res) => {
    res.send({ firstName: 'John', lastName: 'Doe' })
})

app.post('/user', (req, res) => {
    res.send('User created successfully!')
})

app.delete('/user', (req, res) => {
    res.send('User deleted successfully!')
})

// This will match all HTTP methods (GET, POST, PUT, DELETE, etc.) for the route '/test'
app.use('/test', (req, res) => {
    res.send('Hello from the server...!')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})