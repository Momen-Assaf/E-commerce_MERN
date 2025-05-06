const express = require('express')
const cors = require('cors') // cross origin resourse sharing

require('dotenv').config()
const connectDB = require('./config/db')

const app = express()
app.use(cors())

const PORT = process.env.PORT || 8080

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Connected to DB')
        console.log('Server is running')
    })
})