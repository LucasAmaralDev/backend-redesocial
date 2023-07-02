const { Model, DataTypes } = require("sequelize");

class PersonalInfoModel extends Model {
    static init(database) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            description: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'users', key: 'id' },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            }
        }, {
            tableName: 'personalinfo',
            modelName: 'PersonalInfo',
            timestamps: false,
            sequelize: database
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'userId' });
    }
}

module.exports = { PersonalInfoModel };
