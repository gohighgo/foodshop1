const express = require("express");
const orderController = require("../controllers/orderController");
const orderRouter = express.Router();
 
const passport = require('passport');
require('../config/passport')(passport);
// passport.authenticate('jwt', { session: false }),

orderRouter.get('/delivered', passport.authenticate('jwt', { session: false }), orderController.getDelivered);
orderRouter.get('/not-delivered', passport.authenticate('jwt', { session: false }), orderController.getNotDelivered);
orderRouter.post('/', orderController.newOrder);
orderRouter.put('/:id', passport.authenticate('jwt', { session: false }), orderController.updateDelivered);
orderRouter.delete('/:id', passport.authenticate('jwt', { session: false }), orderController.delete);


 
module.exports = orderRouter;