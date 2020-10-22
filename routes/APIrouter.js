const express = require("express");
const APIrouter = express.Router();

const productRouter = require('./productRouter');
const categoryRouter = require('./categoryRouter');
 

APIrouter.use('/category', categoryRouter);
// APIrouter.use('/product', productRouter);

 
module.exports = APIrouter;