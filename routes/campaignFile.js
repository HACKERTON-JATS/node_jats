const express = require('express');
const router = express.Router();
const config = require('../config/multer');

const verifyToken = require('../middlewares/verifyToken');
const errorHandler = require('../middlewares/errorHandler');
const checkToken = require('../middlewares/checkToken');

const FileController = require('../controller/user');

const postCampaignFile = errorHandler(FileController.postCampaignFile);

router.post('/file/:id', verifyToken, checkToken, config.upload.array('campaignFile'), postCampaignFile);

module.exports = router;