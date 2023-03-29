const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const EventCategory = connection.define (
    'event_category',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {
                    msg: 'Please, don\'t leave the field empty'
                }
            }
        }
    },
    { updatedAt: false }
)

module.exports = EventCategory