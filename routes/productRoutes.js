const productController = require('../controller/productController.js')

const router = require('express').Router()



router.post('/addProduct', productController.addProduct)

router.get('/getProducts', productController.getProducts)
 
router.get('/published', productController.getPublishedProduct)
 

router.get('/:id', productController.getSingleProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct) 

module.exports = router 