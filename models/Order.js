const mongoose = require("mongoose");
 
const Schema = mongoose.Schema;
// установка схемы
const ordertScheme = new Schema({
    products: {
        type: Object,
        required: true
    },
    date: {
        type: Object,
        default: (new Date()).toString()
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 12
    },
    name: {
        type: String,
        minlength: 2,
        required: true
    },
    delivered: {
        type: Boolean,
        required: true,
        default: false
    },
    userId: {
        type: String,
        required: false,
        default: null
    }

});
module.exports = mongoose.model("Order", ordertScheme);