require('dotenv').config()
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const controller = require('./controller')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} =process.env
const app = express()
app.use(express.json())

app.use(session({
    resave: false, 
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 31}, // 1 month
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('DB IS CONNECTED')
    app.listen(SERVER_PORT, () => console.log(`PULLED INTO PORT ${SERVER_PORT}`))
})

app.get('/api/auth/register')