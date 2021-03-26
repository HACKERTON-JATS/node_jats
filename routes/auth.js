const express = require('express');

const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');
const errorHandler = require('../middlewares/errorHandler');
const checkToken = require('../middlewares/checkToken');

const authController = require('../controller/auth');

const loginRouter = errorHandler(authController.login);
const logoutRouter = errorHandler(authController.logout);

router.post('/auth', loginRouter);
router.get('/logout', verifyToken, checkToken, logoutRouter);

module.exports = router;