const express = require("express");
const categoryController = require("../controllers/categoryController");
const categoryRouter = express.Router();
 

categoryRouter.get('/', categoryController.list);
categoryRouter.post('/', categoryController.add);
categoryRouter.delete('/:id', categoryController.delete);
categoryRouter.put('/:id', categoryController.edit);

 
module.exports = categoryRouter;