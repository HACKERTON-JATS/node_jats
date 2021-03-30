const Campaign = require('../models/campaign');
const CampaignFile = require('../models/campaignFile');

const viewCampaign = async(req, res) => {
    try {
        const size = Number(req.query.size);
        const offset = size * req.query.page;

        const campaigns = await Campaign.findAll({
            attributes: ['created_at', 'user_id', 'title', 'is_accepted'],
            order: [['created_at', 'DESC']],
            limit: size,
            offset: offset
        });
        res.status(200).json(campaigns);
    }
    catch(err) {
        console.error(err);a
        return error;
    }
};

const viewCampaignDetail = async(req, res) => {
    try {
        const campaign = await Campaign.findOne({
            where: { id: req.params.id }
        })
        res.status(200).json(campaign);
    } catch(error) {
        console.error(error);
        return error;
    }
};

const isAccepted = async(req, res) => {
    try {
        await Campaign.update({
            is_accepted: req.body.is_accepted
        }, {
            where: { id: req.params.id },
        });
        res.json({
            message: 'success'
        });
        res.status(200);
        res.end();
    } catch(error) {
        console.error(error);
        return error;
    }
};

const isRejected = async(req, res) => {
    try {
        await Campaign.destroy({
            where: { id: req.params.id }
        });
        res.status(200);
        res.end();
    } catch(error) {
        console.error(error);
        return error;
    }
};

module.exports = {
    viewCampaign,
    viewCampaignDetail,
    isAccepted,
    isRejected
};