const router = require('express').Router()

const { 
    getAllEquipments,
    getOneEquipment,
    createEquipment,
    updateEquipment,
    deleteEquipment } = require('../controllers/equipment.controller')

const { checkAuth, checkAdmin, checkVolunteer, checkVolunteerDonor } = require('../middlewares/auth')




//Admins
router.get('/', checkAuth, checkAdmin, getAllEquipments)

router.get('/:id', checkAuth, checkAdmin, checkVolunteer, checkVolunteerDonor, getOneEquipment)

router.post('/', checkAuth, checkAdmin, checkVolunteer, checkVolunteerDonor, createEquipment)

router.put('/:id', checkAuth, checkAdmin, updateEquipment)

router.delete('/:id', checkAuth, checkAdmin, deleteEquipment)

module.exports = router
