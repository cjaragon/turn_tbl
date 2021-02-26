require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./authCtrl')
const albumCtrl = require('./albumCtrl')
const auth = require('./middleware/authMiddleware')
const songCtrl = require('./songCtrl')

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

app.post('user/albums/add', auth.usersOnly, albumCtrl.addAlbum)
app.get('/user/albums', auth.usersOnly, albumCtrl.getUserAlbums)
app.delete('/user/albums/:id', auth.usersOnly, albumCtrl.deleteAlbum)
app.put('/user/albums/:id', auth.usersOnly, albumCtrl.albumHeard)

app.post('/album/songs/add', auth.usersOnly, songCtrl.addSong)
app.get('/album/songs', auth.usersOnly, songCtrl.getSongs)

app.listen(SERVER_PORT, () => console.log(`Listening to port ${SERVER_PORT}`))