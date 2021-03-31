const Sequelize = require('sequelize');

module.exports = class Admin extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            code: {
                type: Sequelize.STRING(100),
                allowNull: false,
                primaryKey: true
            },
        }, {
            sequelize,
            timestamps: false,
            paranoid: false,
            modelName: 'Admin',
            tableName: 'admin_tbl',
            charset: 'utf8',
            collate: "utf8_general_ci"
        });
    }
}