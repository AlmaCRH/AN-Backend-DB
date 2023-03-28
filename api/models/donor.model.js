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
		}
    }
)



module.exports = Donor