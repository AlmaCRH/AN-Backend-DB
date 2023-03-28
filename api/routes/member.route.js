const router = require('express').Router()

const { getAllMembers,
    deleteMember,
    updateMember,
    createMember,
    getOneMember } = require('../controllers/member.controller')


router.get('/', getAllMembers)
router.get('/:id', getOneMember)
router.post('/', createMember)
router.put('/:id', updateMember)
router.delete('/:id', deleteMember)

module.exports = router
