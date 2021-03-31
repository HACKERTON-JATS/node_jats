const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            created_at: {
                type: Sequelize.DATE(6),
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            user_id: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            campaign_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            region: {
                type: Sequelize.ENUM('KANGWON', 'KYEOGKI', 'SOUTHCHUNG', 'NORTHCHUNG', 'SOUTHKYEONG', 'NORTHKYEONG', 'NORTHJEONRA', 'SOUTHJEONRA'),
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            modelName: "Comment",
            tableName: "comment_tbl",
            charset: "utf8",
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Comment.belongsTo(db.Campaign, { foreignKey: "campaign_id", targetKey: "id"});
        db.Comment.hasMany(db.Comment_File, { foreignKey: "comment_tbl_id", sourceKey: "id"});
        db.Comment.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id"});
    }
}