const router = require('express').Router()

const { 
    getAllVolunteer,
    deleteVolunteer,
    updateVolunteer,
    createVolunteer,
    getOneVolunteer } = require('../controllers/volunteer.controller')


router.get('/', getAllVolunteer)
router.get('/:id', getOneVolunteer)
router.post('/', createVolunteer)
router.put('/:id', updateVolunteer)
router.delete('/:id', deleteVolunteer)

module.exports = router
