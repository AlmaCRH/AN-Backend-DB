const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Event = connection.define(
    'event',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                msg: 'Please, don\'t leave the field empty'
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
                msg: 'Please, add a brief description of the event'
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                msg: 'Provide an address where arrange the event'
            }
        }, 
        start_date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                msg: 'Add a date to start for the event'
            }
        },
        end_date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                msg: 'Please, add the end date for the event'
            }
        },
        registered_at: {
            type: DataTypes.STRING,
            defaultValue: function () {
                return new Date()
            }
        }
    },
    { updatedAt: false }
)

module.exports = Event