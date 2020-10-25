const express = require("express");
const mongoose = require("mongoose");
const app = express();
let bodyParser = require('body-parser');
const multer = require("multer");
const cors = require('cors');


// GENERATE KEYS
// require('./generateKeys');



const APIrouter = require("./routes/APIrouter");


const port = 1488;

app.use(cors());

app.use(express.static(__dirname + "/uploads"));


// MULTER SETTINGS
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname.slice((Math.max(0, file.originalname.lastIndexOf(".")) || Infinity)));
    }
});
const fileFilter = (req, file, cb) => {

    if (file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg") {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}
app.use(multer({ storage: storageConfig, fileFilter: fileFilter }).single("uploadedFile"));

// BODY PARSER SETTINGS
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));




// ROUTES
app.use("/api", APIrouter);
app.use(function (req, res, next) {
    res.status(404).send("Resource not found");
});



// listen
// app.listen(3000);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost:27017/foodshop", { useNewUrlParser: true }, function (err) {
    if (err) return console.log(err);
    app.listen(port, function () {
        console.log(`Сервер ожидает подключения...\n http://localhost:${port}/`);
    });
});
