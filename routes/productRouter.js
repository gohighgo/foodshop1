const express = require("express");
const productController = require("../controllers/productController");
const productRouter = express.Router();
 
const passport = require('passport');
require('../config/passport')(passport);
// passport.authenticate('jwt', { session: false }),

productRouter.get('/:id', productController.getProductsByCategory);
productRouter.get('/details/:id', productController.getProductById);
productRouter.post('/', passport.authenticate('jwt', { session: false }), productController.createProduct);
productRouter.delete('/:id', passport.authenticate('jwt', { session: false }), productController.deleteById);
productRouter.put('/:id', passport.authenticate('jwt', { session: false }), productController.update);

 
module.exports = productRouter;