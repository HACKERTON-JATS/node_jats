const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');
const errorHandler = require('../middlewares/errorHandler');
const checkToken = require('../middlewares/checkToken');

const FileController = require('../controller/user');

const postCommentFile = errorHandler(FileController.postCommentFile);

router.post('/:id', verifyToken, checkToken, postCommentFile);

module.exports = router;