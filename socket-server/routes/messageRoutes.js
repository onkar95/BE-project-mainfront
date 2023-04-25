const { Router } = require('express');
const { sendMessage, getMessage, getMembers, getAll } = require('../controller/messageController');
const { isAuthenticatedUser } = require('../middleware/Auth');

const router = Router();


router.post('/send-message', isAuthenticatedUser, sendMessage)
router.get('/get-message/:SenderID', isAuthenticatedUser, getMessage)
router.get('/get-members', isAuthenticatedUser, getMembers)
router.get('/all', isAuthenticatedUser, getAll)


module.exports = router;

