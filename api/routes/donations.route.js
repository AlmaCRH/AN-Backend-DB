const router = require('express').Router()

const { 
    getAllDonations,
    deleteDonation,
    updateDonation,
    createDonation,
    getOneDonation,
    getMyDonations
 } = require('../controllers/donations.controller')
 
const { checkAdmin, checkAuth } = require('../middlewares/auth')

//Admin
router.get('/',checkAuth, checkAdmin, getAllDonations)

router.get('/:id', checkAuth, checkAdmin, getOneDonation)
router.post('/',checkAuth, createDonation)
router.put('/:id', checkAuth, checkAdmin, updateDonation)
router.delete('/:id', checkAuth, checkAdmin, deleteDonation)

//Donor
router.get('/', checkAuth, checkAdmin, getMyDonations)




module.exports = router
