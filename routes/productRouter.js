const express = require("express");
const productController = require("../controllers/productController");
const productRouter = express.Router();
 


productRouter.get('/:id', productController.getProductsByCategory);
productRouter.get('/details/:id', productController.getProductById);
productRouter.post('/', productController.createProduct);
productRouter.delete('/:id', productController.deleteById);
productRouter.put('/:id', productController.update);

 
module.exports = productRouter;