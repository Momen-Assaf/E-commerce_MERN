const express = require('express')
const cors = require('cors') // cross origin resourse sharing

const cookieParser = require('cookie-parser')

require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')

const app = express() // the app.use should be before the router
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/api', router)

const PORT = process.env.PORT || 8080

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Connected to DB')
        console.log('Server is running')
    })
})