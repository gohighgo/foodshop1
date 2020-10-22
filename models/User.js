const mongoose = require("mongoose");
 
const Schema = mongoose.Schema;
// установка схемы
const userScheme = new Schema({
    login: {
        type: String,
        required: true,
        minlength:3,
        maxlength:20
    },
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength:5,
        maxlength:20
    },
    firstName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 12
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true,
        default: 2
    },
    isAdmin: {
        type: Number,
        required: true,
        default: 0
    }
});
module.exports = mongoose.model("User", userScheme);