const express = require("express");
const APIrouter = express.Router();

const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const productRouter = require('./productRouter');
const orderRouter = require('./orderRouter');
 

APIrouter.use('/category', categoryRouter);
APIrouter.use('/product', productRouter);
APIrouter.use('/order', orderRouter);
//доробити
APIrouter.use('/user', userRouter);

 
module.exports = APIrouter;