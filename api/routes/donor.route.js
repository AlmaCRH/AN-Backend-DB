const router = require('express').Router()

const { 
    getAllDonors,
    deleteDonor,
    updateDonor,
    createDonor,
    getOneDonor
 } = require('../controllers/donor.controller')
const { checkAuth, checkAdmin, checkDonor, checkVolunteerDonor } = require('../middlewares/auth')


router.get('/',checkAuth, checkAdmin, getAllDonors)
router.get('/:id', checkAuth, checkAdmin, checkDonor, checkVolunteerDonor, getOneDonor)
router.post('/', checkAuth, checkAdmin, createDonor)
router.put('/:id', checkAuth, checkAdmin, checkDonor, checkVolunteerDonor, updateDonor)
router.delete('/:id', checkAuth, checkAdmin, checkDonor, checkVolunteerDonor, deleteDonor)

module.exports = router
