const router = require('express').Router()

const { 
    getAllProfessionals,
    getOneProfessional,
    createProfessional,
    updateProfessional,
    deleteProfessional } = require('../controllers/professional.controller')
const { checkAuth, checkAdmin, checkVolunteer, checkVolunteerDonor } = require('../middlewares/auth')


router.get('/', checkAuth, checkAdmin, checkVolunteer, checkVolunteerDonor, getAllProfessionals)
router.get('/:id', checkAuth, checkAdmin, checkVolunteer, checkVolunteerDonor, getOneProfessional)
router.post('/', checkAuth, checkAdmin, checkVolunteer, checkVolunteerDonor, createProfessional)
router.put('/:id',checkAuth, checkAdmin, updateProfessional)
router.delete('/:id', checkAuth, checkAdmin, deleteProfessional)

module.exports = router
