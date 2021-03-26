const express = require('express');

const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');
const errorHandler = require('../middlewares/errorHandler');
const checkToken = require('../middlewares/checkToken');

const adminController = require('../controller/admin');
const authController = require('../controller/auth');

const login = errorHandler(authController.login);
const logout = errorHandler(authController.logout);
const viewCampaign = errorHandler(adminController.viewCampaign);
const viewCampaignDetail = errorHandler(adminController.viewCampaignDetail);
const isAccepted = errorHandler(adminController.isAccepted);
const isRejected = errorHandler(adminController.isRejected);

router.post('/auth', login);
router.get('/logout', verifyToken, checkToken, logout);
router.get('/campaign', verifyToken, checkToken, viewCampaign);
router.get('/campaign/:id', verifyToken, checkToken, viewCampaignDetail);
router.patch('/campaign/accept/:id', verifyToken, checkToken, isAccepted);
router.patch('/campaign/reject/:id', verifyToken, checkToken, isRejected);

module.exports = router;