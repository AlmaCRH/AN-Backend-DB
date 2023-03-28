const Event = require('../models/event.model')

async function getAllEvents(req, res) {
    try {
        const events = await Event.findAll()

        if (events) {
            return res.status(200).json(events)
        } else {
            return res.status(404).send('No events found')
        }
    } catch (err) {
        return res.status(500).send(err.message)
    }
}


async function getOneEvent(req, res) {
    try {
        const event = await Event.findByPk(req.params.eventId)

        if (event) {
            return res.status(200).json(event)
        } else {
            return res.status(404).send('Event not found')
        }
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

async function updateEvent(req, res) {
    try {
        const [event] = await Event.update(req.body, {
            where: {
                id: req.params.eventId,
            }
        })

        if (event) {
            return res.status(200).send('Event updated')
        } else {
            return res.status(404).send('Event not found')
        }
    } catch (err) {
        return res.status(500).send(err.message)
    }
}


async function createEvent(req, res) {
    try {
        const event = await Event.create(req.body)
        if (event) {
            return res.status(200).json({message: 'Event created', event: event})

        } else {
            return res.status(404).send('Cannot create event')
        }
    } catch (err) {
        return res.status(500).send(err.message)
    }
}


async function deleteEvent(req, res) {
    try {
        const event = await Event.destroy({
            where: {
                id: req.params.eventId
            }
        })

        if(event) {
            return res.status(200).json('Event deleted')
        } else {
            return res.status(400).send('Event not found')
        }
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

module.exports = {
    getAllEvents,
    getOneEvent,
    updateEvent,
    createEvent,
    deleteEvent
}