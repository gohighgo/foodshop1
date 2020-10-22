const express = require("express");
const APIrouter = express.Router();

const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
 

APIrouter.use('/category', categoryRouter);
//доробити
APIrouter.use('/user', userRouter);

 
module.exports = APIrouter;