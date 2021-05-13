const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/read', productController.readProduct);
router.post('/create', productController.createProduct);
router.put('/update/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);
module.exports = router;