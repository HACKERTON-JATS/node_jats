const Sequelize = require('sequelize');

module.exports = class Domain extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.STRING(20),
                allowNull: false
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
                type: Sequelize.ENUM,
                allowNull: false
            }
        })
    }
}