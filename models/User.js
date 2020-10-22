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
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength:5,
        maxlength:20
    }
});
module.exports = mongoose.model("User", userScheme);