const express = require('express')
const connectDB = require('./config/database')
const app = express()
const User = require('./models/user')

app.use(express.json())

app.post('/signup', async (req, res) => {
  console.log(req.body)
  const userObj = req.body

  try {
    const user = new User(userObj)
    await user.save()
    res.send('User added successfully...')
  } catch (err) {
    res.status(400).send('Error adding user: ' + err.message)
  }
})

connectDB()
    .then(() => {
      console.log('Database connected successfully...')
      app.listen(3000, () => {
        console.log('Server is listening on port 3000...')
      })
    })
    .catch((err) => console.error('Database connection error:', err))