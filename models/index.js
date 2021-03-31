const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const Admin = require('./admin');
const Campaign = require('./campaign');
const CampaignFile = require('./campaignFile');
const Comment = require('./comment');
const CommentFile = require('./commentFile');
const User = require('./user');

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.Admin = Admin;
db.Campaign = Campaign;
db.CampaignFile = CampaignFile;
db.Comment = Comment;
db.CommentFile = CommentFile;
db.User = User;

Admin.init(sequelize);
Campaign.init(sequelize);
CampaignFile.init(sequelize);
Comment.init(sequelize);
CommentFile.init(sequelize);
User.init(sequelize);

Campaign.associate(db);
CampaignFile.associate(db);
Comment.associate(db);
CommentFile.associate(db);
User.associate(db);

module.exports = db;