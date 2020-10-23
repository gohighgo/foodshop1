const Order = require('../models/Order');

exports.newOrder = function (request, response){
    if (!request.body) return response.sendStatus(400);
    const {products, address, phoneNumber, name, userId} = request.body
    Order.create({
        name: name,
        products: products,
        address: address,
        phoneNumber: phoneNumber,
        userId: userId
    }, function(err, doc){
        if (err) return response.status(400).send(err);
        response.send(doc._id);
    });
}

exports.getDelivered = function (request, response){

    Order.find({delivered: true}, function(err, docs){
        if (err) return response.status(500).send(err);
        response.send(docs);
    });
}

exports.getNotDelivered = function (request, response){

    Order.find({delivered: false}, function(err, docs){
        if (err) return response.status(500).send(err);
        response.send(docs);
    });
}

exports.updateDelivered = function (request, response){
    if (request.body.delivered == undefined) return response.sendStatus(400);
    Order.updateOne({_id: request.params.id}, {delivered: request.body.delivered}, function(err, docs){
        if (err) return response.status(400).send(err);
        response.send(docs);
    });
}

exports.delete = function (request, response){
    Order.deleteOne({_id: request.params.id}, function(err, docs){
        if (err) return response.status(400).send(err);
        response.send(docs);
    });
}