const router = require('express').Router()

const { getAllEvents, getOneEvent, updateEvent, createEvent, deleteEvent } = require('../controllers/event.controller')

router.get('/', getAllEvents)
router.get('/:eventId', getOneEvent)
router.post('/', createEvent)
router.put('/:eventId', updateEvent)
router.delete('/:eventId', deleteEvent)

module.exports = router
