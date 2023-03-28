const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Project = connection.define(
	'project',
	{
		target: {
			type: DataTypes.STRING,
			allowNull: false,
            validate: {
                notEmpty: true
            }
		},
		description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        objective: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        budget: {
            type: DataTypes.DECIMAL,
        },
        collect: {
            type: DataTypes.DECIMAL,
        },
        deadline: {
			type: DataTypes.DATE,
        },
        status: {
            type: DataTypes.ENUM('acepted', 'denied', 'draft')
        },
        createdAt: {
            type: DataTypes.STRING,
            defaultValue: function () {
                return new Date()
            }
		},
    },
)



module.exports = Project