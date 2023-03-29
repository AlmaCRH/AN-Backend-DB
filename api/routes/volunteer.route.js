const router = require('express').Router()

const { 
    getAllVolunteer,
    deleteVolunteer,
    updateVolunteer,
    createVolunteer,
    getOneVolunteer } = require('../controllers/volunteer.controller')

const { checkAuth, checkAdmin, checkVolunteerDonor } = require('../middlewares/auth')


router.get('/', checkAuth, checkAdmin, getAllVolunteer)
router.get('/:id', checkAuth, checkAdmin, createVolunteer, checkVolunteerDonor, getOneVolunteer)
router.post('/', checkAuth, checkAdmin, createVolunteer)
router.put('/:id', checkAuth, checkAdmin, createVolunteer, checkVolunteerDonor, updateVolunteer)
router.delete('/:id', checkAuth, checkAdmin, createVolunteer, checkVolunteerDonor, deleteVolunteer)

module.exports = router
