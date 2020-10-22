const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();
 

userRouter.get('/:id', userController.findById);
userRouter.post('/', userController.register);
// userRouter.delete('/:id', userController.delete);
// userRouter.put('/:id', userController.edit);

 
module.exports = userRouter;