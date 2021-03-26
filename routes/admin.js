const express = require('express');

const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');
const errorHandler = require('../middlewares/errorHandler');
const checkToken = require('../middlewares/checkToken');

const adminController = require('../controller/admin');

const viewCampaign = errorHandler(adminController.viewCampaign);
const viewCampaignDetail = errorHandler(adminController.viewCampaignDetail);
const isAccepted = errorHandler(adminController.isAccepted);
const isRejected = errorHandler(adminController.isRejected);

router.get('/campaign', verifyToken, checkToken, viewCampaign);
router.get('/campaign/:id', verifyToken, checkToken, viewCampaignDetail);
router.patch('/campaign/accept/:id', verifyToken, checkToken, isAccepted);
router.patch('/campaign/reject/:id', verifyToken, checkToken, isRejected);

module.exports = router;