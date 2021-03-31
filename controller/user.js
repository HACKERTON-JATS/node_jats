const { config } = require('dotenv/types');
const CampaignFile = require('../models/campaignFile');
const CommentFile = require('../models/commentFile');

const postCampaignFile = async(req, res) => {
    config.upload.array('campaignFile')(req, res, (err) => {
        CampaignFile.create({
            path: req.file.filename,
            report_id: req.params.campaignId 
        }).then(result => res.json(result))
        .catch(err => res.json(err));
    })
};

const postComment = async(req, res) => {
    config.upload.single('commentFile')(req, res, (err) => {
        CommentFile.create({
            path: req.file.filename,
            comment_id: req.params.campaignId
        }).then(result => res.json(result))
        .catch(err => res.json(err));
    })
};

module.exports = {
    postCampaignFile,
    postComment
}