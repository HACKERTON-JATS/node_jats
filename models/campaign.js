const Sequelize = require('sequelize');

module.exports = class Campaign extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            content: {
                type: Sequelize.STRING(500),
                allowNull: false
            },
            end_at: {
                type: Sequelize.DATETIME,
                allowNull: false
            },
            is_accepted: {
                type: Sequelize.TINYINT,
                allowNull: false
            },
            user_id: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATETIME,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            like_cnt: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            region: {
                type: Sequelize.STRING(255),
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            tableName:"campaign_tbl",
            modelName: "Campaign",
            charset: "utf8",
            collate: "utf8_general_ci"
        });
    }

    static associate(db) {
        db.Campaign.hasMany(db.Campaign_File, { foreignKey: "campaign_id", sourceKey: "id"});
        db.Campaign.hasMany(db.Comment, { foreignKey: "campaign_id", sourceKey: "id"});
        db.Campaign.belongsTo(db.User, { foreignKey: "writer", targetKey: "id"});
    }
}