const router = require('express').Router()

const { 
    getAllProjects,
    getOneProject,
    createProject,
    updateProject,
    deleteProject
 } = require('../controllers/project.controller')
const { checkAuth, checkAdmin, checkVolunteer } = require('../middlewares/auth')



router.get('/', checkAuth, checkAdmin, getAllProjects)
router.get('/:id', checkAuth, getOneProject)
router.post('/', checkAuth, checkAdmin, checkVolunteer, checkVolunteerDonor, createProject)

router.put('/:id', checkAuth, checkAdmin, updateProject)
router.delete('/:id', checkAuth, checkAdmin, deleteProject)

module.exports = router
