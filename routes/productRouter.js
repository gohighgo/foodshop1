const express = require("express");
const productController = require("../controllers/productController");
const productRouter = express.Router();
 

productRouter.get('/', productController.list);

 
module.exports = productRouter;