const express = require("express");
const categoryController = require("../controllers/categoryController");
const categoryRouter = express.Router();



const passport = require('passport');
require('../config/passport')(passport);
// passport.authenticate('jwt', { session: false }),

 

categoryRouter.get('/', categoryController.list);
categoryRouter.get('/:id', categoryController.getById);
categoryRouter.post('/', passport.authenticate('jwt', { session: false }), categoryController.add);
categoryRouter.delete('/:id', passport.authenticate('jwt', { session: false }), categoryController.delete);
categoryRouter.put('/:id', passport.authenticate('jwt', { session: false }), categoryController.edit);

 
module.exports = categoryRouter;