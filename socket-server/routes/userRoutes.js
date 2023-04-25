const { Router } = require('express');
const { GetAllUsers, DeleteUser, GetSingleUser, UpdateUser, register, login, logout, verifyuser, UpdateProfile } = require('../controller/authControllers');
// const authControllers = require('../controllers/authControllers');

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/Auth');

const router = Router();


router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles("admin"), GetAllUsers)
router.delete('/admin/deleteuser/:id', isAuthenticatedUser, authorizeRoles("admin"), DeleteUser)
router.get('/admin/getuser/:id', isAuthenticatedUser, authorizeRoles("admin"), GetSingleUser)
router.put('/admin/updateuser/:id', isAuthenticatedUser, authorizeRoles("admin"), UpdateUser)

router.put('/updateMe/:id', isAuthenticatedUser, UpdateProfile)
router.get('/Singleuser/:id', isAuthenticatedUser, GetSingleUser)

router.post('/register', register)
router.get("/verifyuser", isAuthenticatedUser, verifyuser);
router.post('/login', login)

module.exports = router