const { Model, DataTypes } = require("sequelize");

class PostsModel extends Model {
    static init(database) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
                autoIncrement: true,
                primaryKey: true,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            date: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'users', key: 'id' },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            }
        }, {
            tableName: 'posts',
            modelName: 'Posts',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        this.belongsTo(models.users, { foreignKey: 'userId' });
    }
}

module.exports = { PostsModel };
