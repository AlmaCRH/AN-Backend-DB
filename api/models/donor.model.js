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
                isRegexMatch: {
                    args: /^ES\d{2}\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{2}$/,
                    msg: 'Bank account has not a valid value',
                },
            },
		}
    }
)



module.exports = Donor