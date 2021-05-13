const express = require('express');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

router.get('/read', categoryController.readCategory);
router.post('/create', categoryController.createCategory);
router.put('/update/:id', categoryController.updateCategory);
router.delete('/delete/:id', categoryController.deleteCategory);
module.exports = router;
  