const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const EventCategory = connection.define (
    'event_category',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                msg: 'Please, don\'t leave the field empty'
            }
        }
    },
    { updatedAt: false }
)

module.exports = EventCategory