const router = require('express').Router()

const { getAllMembers,
    deleteMember,
    updateMember,
    createMember,
    getOneMember,
    getMyMember } = require('../controllers/member.controller')
const { checkAuth, checkAdmin, checkDonor, checkVolunteer, checkVolunteerDonor } = require('../middlewares/auth')


router.get('/', checkAuth, checkAdmin,  getAllMembers)
router.get('/profile', checkAuth, getMyMember)
router.get('/:id', checkAuth, checkAdmin, getOneMember)
router.post('/', checkAuth, checkAdmin, createMember)
router.put('/:id', checkAuth, checkAdmin, checkDonor, checkVolunteer, checkVolunteerDonor,  updateMember)
router.delete('/:id', checkAuth, checkAdmin, checkDonor, checkVolunteer, checkVolunteerDonor, deleteMember)

module.exports = router
