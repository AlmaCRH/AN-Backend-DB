const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Professional = connection.define(
	'professional',
	{
		name: {
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
        skill: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    },
    {createdAt: false },
    {updatedAt: false}
)

module.exports = Member