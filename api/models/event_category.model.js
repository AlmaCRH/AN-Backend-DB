const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const EventCategory = connection.define (
    'event_category',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },
    { updatedAt: false }
)

module.exports = EventCategory