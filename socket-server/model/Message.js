const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})