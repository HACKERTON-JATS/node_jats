const Sequelize = require('sequelize');

module.exports = class Comment_File extends Sequelize.Model {
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
            comment_tbl_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            comment_id: {
                type: Sequelize.BIGINT
            }
        }, {
            sequelize,
            timestamps: false,
            modelName: "Comment_File",
            tableName: "comment_file_tbl",
            charset: "utf8",
            collate: "utf8_general_ci"
        });
    }
}  