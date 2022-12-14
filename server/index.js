require('dotenv').config()

const express = require('express')
const cors = require('cors')
// const session = require('express-session')

const { SERVER_PORT, SESSION_SECRET } = process.env

const path = require('path')

const app = express()


app.use(express.json())
app.use(cors())

// app.use(session({
//     secret: SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 1000 * 60 * 60 * 24 }
// }))

app.listen(SERVER_PORT, console.log(`We are live in Soul Society ${SERVER_PORT}`))
