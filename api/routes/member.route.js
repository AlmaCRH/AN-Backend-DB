const router = require('express').Router()

const { getAllMembers,
    deleteMember,
    updateMember,
    createMember,
    getOneMember,
    getMyMember,
    updateMyMember,
    deleteMyMember 
} = require('../controllers/member.controller')

const {
    checkAuth,
    checkAdmin 
} = require('../middlewares/auth')



//Members
router.get('/profile', checkAuth, getMyMember)
router.put('/profile', checkAuth, updateMyMember)
router.delete('/profile', checkAuth, deleteMyMember)

//Admin
router.get('/', checkAuth, checkAdmin, getAllMembers)
router.get('/:id', checkAuth, checkAdmin, getOneMember)
router.post('/', checkAuth, checkAdmin, createMember)
router.put('/:id', checkAuth, checkAdmin, updateMember)
router.delete('/:id', checkAuth, checkAdmin, deleteMember)

module.exports = router
