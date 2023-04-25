const bcrypt = require('bcrypt')
const Message = require('../model/Message')
const ErrorHandler = require("../utils/errorHandelr");
const dotenv = require('dotenv');
const CatchAsyncError = require('../middleware/CatchAsyncError');
const sendToken = require('../utils/JwtCreate');
dotenv.config();


exports.sendMessage = CatchAsyncError(async (req, res, next) => {
    const senderId = req.user.id;
    const { SendToUserID, message } = req.body

    const response = await Message.create({
        from: senderId,
        to: SendToUserID,
        message,
    })

    res.status(200).json({ success: true, response })
})

exports.getMessage = CatchAsyncError(async (req, res, next) => {
    const messagesToUser = req.user.id;
    const { SenderID } = req.params

    const response = await Message.find({
        $or: [
            { $and: [{ from: SenderID }, { to: messagesToUser }] },
            { $and: [{ from: messagesToUser }, { to: SenderID }] }
        ]
    })

    res.status(200).json({ success: true, response })
})

exports.getMembers = CatchAsyncError(async (req, res, next) => {
    const messagesToUser = req.user.id;
    const messages = await Message.find({ to: messagesToUser }).populate({ path: "from", module: 'User' })
    let membersID = [];
    let members = [];

    messages.map((val) => {
        let id = val.from?._id.toString();
        if (!membersID.includes(id)) {
            return membersID.push(id), members.push(val.from)

        }
    })
    res.status(200).json({ success: true, members })
})

exports.getAll = CatchAsyncError(async (req, res, next) => {
    const messages = await Message.find()

    res.status(200).json({ success: true, messages })
})