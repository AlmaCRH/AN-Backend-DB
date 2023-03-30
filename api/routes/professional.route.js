const router = require('express').Router()

const { 
    getAllProfessionals,
    getOneProfessional,
    createProfessional,
    updateProfessional,
    deleteProfessional } = require('../controllers/professional.controller')
const { checkAuth, checkAdmin, checkVolunteer } = require('../middlewares/auth')


router.get('/', checkAuth, checkAdmin, checkVolunteer, getAllProfessionals)
router.get('/:id', checkAuth, checkAdmin, checkVolunteer, getOneProfessional)
router.post('/', checkAuth, checkAdmin, checkVolunteer, createProfessional)
router.put('/:id',checkAuth, checkAdmin, updateProfessional)
router.delete('/:id', checkAuth, checkAdmin, deleteProfessional)

module.exports = router
