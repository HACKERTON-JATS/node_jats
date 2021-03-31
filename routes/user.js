const express = require('express');
const router = express.router;
const FileController = require('../controller/user');

router.post('/', FileController.postCommentFile);
router.post('/file', FileController.postCampaignFile);

module.exports = router;