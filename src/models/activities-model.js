const { Model, DataTypes } = require("sequelize");

class ActivitiesModel extends Model {
    static init(database) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
                autoIncrement: true,
                primaryKey: true,
            },
            atividade: {
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
            tableName: 'activities',
            modelName: 'Activities',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        this.belongsTo(models.users, { foreignKey: 'userId' });
    }
}

module.exports = { ActivitiesModel };
