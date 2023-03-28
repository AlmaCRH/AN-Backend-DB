const router = require('express').Router()

const { 
    getAllProjects,
    getOneProject,
    createProject,
    updateProject,
    deleteProject
 } = require('../controllers/project.controller')


router.get('/', getAllProjects)
router.get('/:id', getOneProject)
router.post('/', createProject)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)

module.exports = router
