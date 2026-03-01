const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://iirfanabbas1996:8n8eL6kEx5gbbZcY@cluster0.cubn8.mongodb.net/devBook')
}

module.exports = connectDB;