const router = require('express').Router()

const { 
    getAllEquipments,
    getOneEquipment,
    createEquipment,
    updateEquipment,
    deleteEquipment } = require('../controllers/equipment.controller')
const { checkAuth, checkAdmin, checkVolunteer } = require('../middlewares/auth')

router.get('/', checkAuth, checkAdmin, checkVolunteer, getAllEquipments)
router.get('/:id', checkAuth, checkAdmin, checkVolunteer, getOneEquipment)
router.post('/', checkAuth, checkAdmin, checkVolunteer, createEquipment)
router.put('/:id', checkAuth, checkAdmin, updateEquipment)
router.delete('/:id', checkAuth, checkAdmin, deleteEquipment)

module.exports = router
