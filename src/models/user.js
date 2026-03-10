const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxlength: 20
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
    },
    gender: {
        type: String,
        validate(value) {
            if (!['male', 'female', 'other'].includes(value)) {
                throw new Error('Invalid gender value')
            }
        }
    },
    photoUrl: {
        type: String,
        default: 'https://bup.edu.bd/public/upload/user-dummy.jpeg'
    },
    about: {
        type: String,
        default: 'This is the default about of user!'
    },
    skills: {
        type: [String]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)