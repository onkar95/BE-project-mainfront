require('dotenv').config();
const express = require('express')
const cors = require('cors')
const { connection } = require('./config/Db')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())


mongoose.set('strictQuery', true);
const port = process.env.PORT || 5000;
const server = app.listen(port, () => { console.log('server live on 5000'), connection() });

const io = require('socket.io')(server,
    {
        pingtimeout: 60000,
        cors: {
            origin: "http://localhost:3000",
            credentials: true,
        },
    }
)

io.on('connection', (socket) => {
    console.log('socket io connected')
})

