const mongoose = require('mongoose')// object document mapper for mongodb

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        // console.log('connected to db')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB