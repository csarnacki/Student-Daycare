const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Allergy extends Model {}

Allergy.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'allergy',
    }
);

module.exports = Allergy;