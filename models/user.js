const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.STRING(20),
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            region: {
                type: Sequelize.ENUM('KANGWON', 'KYEOGKI', 'SOUTHCHUNG', 'NORTHCHUNG', 'SOUTHKYEONG', 'NORTHKYEONG', 'NORTHJEONRA', 'SOUTHJEONRA'),
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            modelName: "User",
            tableName: "user_tbl",
            charset: "utf8",
            collate: "utf8_general_ci"
        })
    }
}