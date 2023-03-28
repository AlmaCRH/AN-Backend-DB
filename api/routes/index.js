const router = require('express').Router()


router.use('/equipment', require('./equipment.route'))
router.use('/professional', require('./professional.route'))
router.use('/project', require('./project.route'))
//Here the routes

module.exports = router