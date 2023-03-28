const router = require('express').Router()

const { 
    getAllProfessionals,
    getOneProfessional,
    createProfessional,
    updateProfessional,
    deleteProfessional } = require('../controllers/professional.controller')


router.get('/', getAllProfessionals)
router.get('/:id', getOneProfessional)
router.post('/', createProfessional)
router.put('/:id', updateProfessional)
router.delete('/:id', deleteProfessional)

module.exports = router
