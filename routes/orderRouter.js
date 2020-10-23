const express = require("express");
const orderController = require("../controllers/orderController");
const orderRouter = express.Router();
 

orderRouter.get('/delivered', orderController.getDelivered);
orderRouter.get('/not-delivered', orderController.getNotDelivered);
orderRouter.post('/', orderController.newOrder);
orderRouter.put('/:id', orderController.updateDelivered);
orderRouter.delete('/:id', orderController.delete);


 
module.exports = orderRouter;