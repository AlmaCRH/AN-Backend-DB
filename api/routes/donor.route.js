const router = require('express').Router()

const { 
    getAllDonors,
    deleteDonor,
    updateDonor,
    createDonor,
    getOneDonor
 } = require('../controllers/donor.controller')
const { checkAuth, checkAdmin, checkDonor } = require('../middlewares/auth')


router.get('/',checkAuth, checkAdmin, getAllDonors)
router.get('/:id', checkAuth, checkAdmin, checkDonor, getOneDonor)
router.post('/', checkAuth, checkAdmin, createDonor)
router.put('/:id', checkAuth, checkAdmin, checkDonor, updateDonor)
router.delete('/:id', checkAuth, checkAdmin, checkDonor, deleteDonor)

module.exports = router
