const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();
 

userRouter.get('/:id', userController.findById);
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);

userRouter.put('/change-login/:id', userController.changeLogin);
userRouter.put('/change-email/:id', userController.changeEmail);
userRouter.put('/change-phone/:id', userController.changePhone);
userRouter.put('/change-address/:id', userController.changeAddress);
userRouter.put('/change-name/:id', userController.changeName);

// userRouter.delete('/:id', userController.delete);
// userRouter.put('/:id', userController.edit);

 
module.exports = userRouter;