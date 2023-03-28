const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Donor = connection.define(
	'donor',
	{
		bank_account: {
			type: DataTypes.STRING,
			allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Bank account cannot be empty',
                },
                is: {
                    args: /^[A-Z]{2}(?:[ ]?[0-9]){18,24}$/,

                    msg: 'Bank account has not a valid value',
                },
            },
		},
		member_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Member id cannot be empty'
                }
            }
        },
        createdAt: {
            type: DataTypes.STRING,
            defaultValue: function () {
                return new Date()
            }
		},
    }
)



module.exports = Donor