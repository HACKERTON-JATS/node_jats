const Sequelize = require('sequelize');

module.exports = class CampaignFile extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            path: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            file_name: {
                type: Sequelize.STRING(40),
                allowNull: false
            },
            campaign_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            tableName: "campaign_file_tbl",
            modelName: "CampaignFile",
            charset: "utf8",
            collate: "utf8_general_ci"
        });
    }

    static associate(db) {
        db.CampaignFile.belongsTo(db.Campaign, { foreignKey: "campaign_id", targetKet: "id"});
    }
}