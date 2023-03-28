const router = require('express').Router()


router.use('/member', require('./member.route'))
router.use('/event', require('./event.route'))
router.use('/event_category', require('./event_category.route'))
router.use('/product', require('./product.route'))
//Here the routes

module.exports = router