const CampaignFile = require('../models/campaignFile');
const CommentFile = require('../models/commentFile');
const config = require('../config/multer');

const postCampaignFile = (req, res, err) => {
    console.log(req.files);
    if(err) throw err;
    for(let i = 0; i < req.files.length; i++) {
        CampaignFile.create({
            file_name: req.files[i].originalname,
            path: req.files[i].location,
            campaign_id: req.params.id
        })
    }
    
    res.status(200).json({
        message: "success"
    });
};

const postCommentFile = (req, res) => {
    config.upload.single('commentFile')(req, res, (err) => {
        console.log(req.file);
        CommentFile.create({
            file_name: req.file.originalname,
            path: req.file.location,
            comment_id: req.params.id
        }).then(result => res.json(result))
        .catch(err => res.json(err));
    })
};

module.exports = {
    postCampaignFile,
    postCommentFile
}