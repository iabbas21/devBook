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

// GET /user
app.get('/user', async (req, res) => {
  const { emailId } = req.body

  try {
    const user = await User.findOne({ emailId })
    if (!user) {
      res.status(404).send('User not found')
      return
    }
    res.send(user)
    // const users = await User.find({ emailId })
    // if (users.length == 0) {
    //   res.status(404).send('User not found')
    //   return
    // }
    // res.send(users)
  } catch(err) {
    res.status(400).send('Something went wrong')
  }
})

// GET /feed - to get all users
app.get('/feed', async (req, res) => {
  try {
    const users = await User.find({})
    res.send(users)
  } catch (err) {
    res.status(400).send('Something went wrong')
  }
})

// DELETE /user - to delete a user by userId
app.delete('/user', async (req, res) => {
  const { userId } = req.body

  try {
    const result = await User.findByIdAndDelete(userId) // --> findOneAndDelete({ _id: userId })
    if (!result) {
      res.status(404).send('User not found')
      return
    }
    res.send('User deleted successfully...')
  } catch (err) {
    res.status(400).send('Something went wrong')
  }
})

// PATCH /user - to update a user by userId
app.patch('/user', async (req, res) => {
  const { userId, ...updatedData } = req.body

  try {
    const result = await User.findByIdAndUpdate(userId, updatedData, {
      runValidators: true,
    }) // --> findOneAndUpdate({ _id: userId }, updatedData)
    console.log(result)
    res.send('User updated successfully...')
  } catch (err) {
    res.status(400).send('Something went wrong')
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