const Sequelize = require('sequelize');

module.exports = class Admin extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            code: {
                type: Sequelize.STRING(100),
                allowNull: false,
                defaultValue: process.env.CODE,
                primaryKey: true
            },
        }, {
            sequelize,
            timestamps: false,
            paranoid: false,
            modelName: 'Admin',
            tableName: 'admin_tbl',
        });
    }
}