const Sequelize = require('sequelize');

module.exports = class CommentFile extends Sequelize.Model {
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
            comment_id: {
                type: Sequelize.BIGINT,
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            modelName: "CommentFile",
            tableName: "comment_file_tbl",
            charset: "utf8",
            collate: "utf8_general_ci"
        });
    }

    static associate(db) {
        db.CommentFile.belongsTo(db.CommentFile, { foreignKey: "comment_tbl_id", targetKey: "id"});
    }
}  