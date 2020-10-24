const express = require("express");
const categoryController = require("../controllers/categoryController");
const categoryRouter = express.Router();



const passport = require('passport');
require('../config/passport')(passport);


 

categoryRouter.get('/', passport.authenticate('jwt', { session: false }), categoryController.list);
categoryRouter.get('/:id', categoryController.getById);
categoryRouter.post('/', categoryController.add);
categoryRouter.delete('/:id', categoryController.delete);
categoryRouter.put('/:id', categoryController.edit);

 
module.exports = categoryRouter;