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
        console.error(err);
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
}