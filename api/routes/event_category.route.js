const router = require('express').Router()

const { getAllCategories, getOneCategory, updateCategory, createCategory, deleteCategory } = require('../controllers/event_category.controller')


router.get('/', getAllCategories)
router.get('/:categoryId', getOneCategory)
router.post('/', createCategory)
router.put('/:categoryId', updateCategory)
router.delete('/:categoryId', deleteCategory)

module.exports = router
