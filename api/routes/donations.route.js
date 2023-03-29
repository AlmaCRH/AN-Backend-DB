const router = require('express').Router()

const { 
    getAllDonations,
    deleteDonation,
    updateDonation,
    createDonation,
    getOneDonation
 } = require('../controllers/donations.controller')
const { checkAdmin, checkAuth, checkDonor, checkVolunteerDonor } = require('../middlewares/auth')


router.get('/',checkAuth, checkAdmin, getAllDonations)
router.get('/:id', checkAuth, checkAdmin, checkDonor, checkVolunteerDonor, getOneDonation)
router.post('/', createDonation)
router.put('/:id', checkAuth, checkAdmin, updateDonation)
router.delete('/:id', checkAuth, checkAdmin, deleteDonation)

module.exports = router
