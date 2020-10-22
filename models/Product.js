const mongoose = require("mongoose");
 
const Schema = mongoose.Schema;
// установка схемы
const productScheme = new Schema({
    name: {
        type: String,
        required: true,
    },
    imagePath: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
        min: 0
    },
    composition: {
        type: String,
        required: true
    },
    categoryId: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Product", productScheme);