const mongoose = require("mongoose");
 
const Schema = mongoose.Schema;
// установка схемы
const categoryScheme = new Schema({
    name: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("Category", categoryScheme);