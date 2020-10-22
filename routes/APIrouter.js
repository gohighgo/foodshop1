const express = require("express");
const APIrouter = express.Router();

const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const productRouter = require('./productRouter');
 

APIrouter.use('/category', categoryRouter);
APIrouter.use('/product', productRouter);
//доробити
APIrouter.use('/user', userRouter);

 
module.exports = APIrouter;