const router = require('express').Router()


router.use('/member', require('./member.route'))
//Here the routes

module.exports = router