const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const Event = connection.define(
    'event',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }, 
        start_date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        end_date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
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