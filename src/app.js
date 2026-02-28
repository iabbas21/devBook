const express = require('express')

const app = express()

const { adminAuth, userAuth } = require('./middlewares/auth')

// Middleware for admin authentication
app.use('/admin', adminAuth)

app.get('/admin/getAllUsers', (req, res) => {
  res.send('All data for admin')
})

app.delete('/admin/deleteUser', (req, res) => {
  res.send('Deleted user!')
})

app.post('/user/login', (req, res) => {
  res.send('User logged in')
})

app.get('/user/data', userAuth, (req, res) => {
  res.send('User data')
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})