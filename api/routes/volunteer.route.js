const router = require('express').Router()

const { 
    getAllVolunteer,
    deleteVolunteer,
    updateVolunteer,
    createVolunteer,
    getOneVolunteer } = require('../controllers/volunteer.controller')

const { checkAuth, checkAdmin } = require('../middlewares/auth')


router.get('/', checkAuth, checkAdmin, getAllVolunteer)
router.get('/:id', checkAuth, checkAdmin, createVolunteer, getOneVolunteer)
router.post('/', checkAuth, checkAdmin, createVolunteer)
router.put('/:id', checkAuth, checkAdmin, createVolunteer, updateVolunteer)
router.delete('/:id', checkAuth, checkAdmin, createVolunteer, deleteVolunteer)

module.exports = router
