const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Equipment = connection.define(
	'equipment',
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
        cost: {
            type: DataTypes.DECIMAL,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    },
    {createdAt: false },
    {updatedAt: false}
)

module.exports = Equipment