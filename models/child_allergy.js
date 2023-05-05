const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ChildAllergy extends Model {}

ChildAllergy.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
        child_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'child',
                key: 'id',
            },
        },
        allergy_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'allergy',
                key: 'id',
            },

        onUpdate: 'CASCADE',  
        onDelete: 'CASCADE',
    
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'child_allergy',
    }
);

        
 
