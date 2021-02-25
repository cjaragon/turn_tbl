require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./authCtrl')

const app = express()
const {SESSION_SECRET, CONNECTION_STRING, SERVER_PORT} = process.env

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then (db => {
    app.set( 'db', db )
    console.log('db is connected')
})

app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: SESSION_SECRET
    })
)

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)

app.listen(SERVER_PORT, () => console.log(`Listening to port ${SERVER_PORT}`))