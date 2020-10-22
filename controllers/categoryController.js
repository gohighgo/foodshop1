const Category = require('../models/Category');

exports.list = function (request, response) {
    Category.find({}, function(err, docs){
        if (err) return response.sendStatus(500, {error: err});
        response.send(docs);
    });
}

exports.getById = function (request, response) {
    if (!request.body) return response.sendStatus(400);
    Category.find({_id: request.params.id}, function(err, docs){
        if (err) return response.sendStatus(400);
        response.send(docs);
    });
}

exports.add = function (request, response){
    if (!request.body) return response.sendStatus(400);

    Category.create({
        name: request.body.name
    }, function(err, doc){
        if (err) return response.status(500).send(err);
        response.send(doc._id);
    });
}

exports.delete = function (request, response){
    const id = request.params.id;

    Category.findOneAndDelete({_id: id}, function(err, doc){
        if (err) return response.sendStatus(400);
        response.send(doc._id);
    });
}

exports.edit = function (request, response){
    const id = request.params.id;
    // console.log(request.body);
    if (!request.body.name) return response.sendStatus(400);
    Category.findOneAndUpdate({_id: id}, {name: request.body.name}, function(err){
        if (err) return response.sendStatus(400);
        response.sendStatus(200);
    });
}