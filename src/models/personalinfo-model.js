const { Model, DataTypes } = require("sequelize");

class PersonalInfoModel extends Model {
    static init(database) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            description: {
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
            tableName: 'personalinfo',
            modelName: 'personalinfo',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        this.belongsTo(models.users, { foreignKey: 'userId' });
    }
}

module.exports = { PersonalInfoModel };
