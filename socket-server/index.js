require('dotenv').config();
const express = require('express')
const cors = require('cors')
const { connection } = require('./config/Db')
const mongoose = require('mongoose')
const auth = require('./routes/userRoutes')
const chat = require('./routes/messageRoutes')

const app = express()
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(express.json())
app.use(cors(corsOptions))
app.use('/auth', auth)
app.use('/chat', chat)


mongoose.set('strictQuery', true);
const port = process.env.PORT || 5000;
const server = app.listen(port, () => { console.log('server live on 5000'), connection() });

const io = require('socket.io')(server,
    {
        cors: {
            origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
            credentials: true,
        },
    }
)

global.onlineUsers = new Map();
io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if (sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-recieve", data);
        }
    });
});
