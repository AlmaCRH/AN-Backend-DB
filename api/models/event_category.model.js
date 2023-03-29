const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const EventCategory = connection.define (
    'event_category',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Please, don\'t leave the field empty'
                }
            }
        }
    },
    { createdAt: false },
    { updatedAt: false }
)

module.exports = EventCategory