const Sequelize = require('sequelize');

module.exports = class Domain extends Sequelize.Model {
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
            sequelize
        })
    }
}