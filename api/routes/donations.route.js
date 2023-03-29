const router = require('express').Router()

const { 
    getAllDonations,
    deleteDonation,
    updateDonation,
    createDonation,
    getOneDonation
 } = require('../controllers/donations.controller')


router.get('/', getAllDonations)
router.get('/:id', getOneDonation)
router.post('/', createDonation)
router.put('/:id', updateDonation)
router.delete('/:id', deleteDonation)

module.exports = router
