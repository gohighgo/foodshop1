const mongoose = require("mongoose");
 

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const Schema = mongoose.Schema;
// установка схемы
const userScheme = new Schema({
    login: {
        type: String,
        required: true,
        minlength:3,
        maxlength:20,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    hash: String,
    salt: String,
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
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    status: {
        type: Number,
        required: true,
        default: 2
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
});
module.exports = mongoose.model("User", userScheme);