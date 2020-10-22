const express = require("express");
const mongoose = require("mongoose");
const app = express();
let bodyParser = require('body-parser');


const APIrouter = require("./routes/APIrouter");


const port = 1488;

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'})); 



// routes
app.use("/api", APIrouter);
app.use(function (req, res, next) {
    res.status(404).send("Resource not found");
});



// listen
// app.listen(3000);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost:27017/foodshop", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(port, function(){
        console.log(`Сервер ожидает подключения...\n http://localhost:${port}/`);
    });
});
