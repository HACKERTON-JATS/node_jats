const Sequelize = require('sequelize');

module.exports = class Domain extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            code: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: process.env.CODE
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