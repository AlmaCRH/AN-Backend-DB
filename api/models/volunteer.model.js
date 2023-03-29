const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Volunteer = connection.define(
	'volunteer',
	// {
	// 	professionals_id: {
	// 		type: DataTypes.INTEGER,
	// 		allowNull: false,
    //         validate: {
    //             notEmpty: {
    //                 msg: 'Professionals id cannot be empty'
    //             }
    //         }
	// 	},
	// 	memeber_id: {
    //         type: DataTypes.STRING,
    //         allowNull: false,
    //         validate: {
    //             notEmpty: {
    //                 msg: 'Member id cannot be empty'
    //             }
    //         }
    //     }
    //}
)



module.exports = Volunteer