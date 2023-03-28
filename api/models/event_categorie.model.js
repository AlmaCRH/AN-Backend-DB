const { DataTypes } = require('sequelize')
const { connection } = require('../../database')

const EventCategorie = connection.define (
    'event_categorie',
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

module.exports = EventCategorie