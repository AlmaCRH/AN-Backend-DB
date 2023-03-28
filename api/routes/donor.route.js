const router = require('express').Router()

const { 
    getAllDonors,
    deleteDonor,
    updateDonor,
    createDonor,
    getOneDonor
 } = require('../controllers/donor.controller')


router.get('/', getAllDonors)
router.get('/:id', getOneDonor)
router.post('/', createDonor)
router.put('/:id', updateDonor)
router.delete('/:id', deleteDonor)

module.exports = router
