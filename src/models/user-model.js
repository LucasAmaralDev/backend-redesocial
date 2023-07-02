const { Model, DataTypes } = require("sequelize");

class UserModel extends Model {
    static init(database) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
                unique: true
            },
            username: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            password: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            imgprofile: {
                type: DataTypes.TEXT,
                allowNull: true,
            }
        }, {
            tableName: 'users',
            modelName: 'users',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        this.hasMany(models.Posts, { foreignKey: 'userId' });
        this.hasMany(models.Activities, { foreignKey: 'userId' });
        this.hasMany(models.PersonalInfo, { foreignKey: 'userId' });
    }
}

module.exports = { UserModel };
