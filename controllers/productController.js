// const { request } = require('express');
let fs = require('fs');
const Product = require('../models/Product');



exports.getProductsByCategory = function (request, response) {
    Product.find({ categoryId: request.params.id }, function (err, docs) {
        if (err) return response.sendStatus(400);
        response.send(docs);
    });
}

exports.getProductById = function (request, response) {
    Product.findOne({ _id: request.params.id }, function (err, doc) {
        if (err) return response.sendStatus(400);
        response.send(doc);
    });
}



exports.createProduct = function (request, response) {
    // let filedata = request.file;
    // if (!filedata)return response.sendStatus(400);
    // const {name, price, weight, composition, categoryId} = request.body;
    // let host = 'http://' + request.headers.host + '/';
    // Product.create({
    //     name: name,
    //     imagePath: host + filedata.filename,
    //     price: price,
    //     weight: weight,
    //     composition: composition,
    //     categoryId: categoryId
    // }, function(err, doc){
    //     if(err){
    //         fs.unlinkSync('./uploads/' + filedata.filename);
    //         return response.status(400).send(err);
    //     }
    //     response.send(doc._id);
    // });
    const { name, price, weight, composition, categoryId, uploadedFile } = request.body;
    Product.create({
        name: name,
        imagePath: uploadedFile,
        price: price,
        weight: weight,
        composition: composition,
        categoryId: categoryId
    }, function (err, doc) {
        if (err) return response.status(400).send(err);
        response.send(doc._id);
    });
}


exports.deleteById = function (request, response) {
    const id = request.params.id;

    Product.findOneAndDelete({ _id: id }, function (err, doc) {
        if (err) return response.sendStatus(400);
        fs.unlinkSync('./uploads' + doc.imagePath.replace('http://' + request.headers.host, ''));
        response.send(doc._id);
    });
}


exports.update = function (request, response) {
    const id = request.params.id;
    if (!request.body.name) return response.sendStatus(400);

    const { name, price, weight, composition, categoryId } = request.body;
    if (!name || !price || !weight || !composition || !categoryId) return response.sendStatus(400);

    Product.findOneAndUpdate({ _id: id }, {
        name: name,
        price: price,
        weight: weight,
        composition: composition,
        categoryId: categoryId
    }, function (err) {
        if (err) return response.status(400).send(err);
        response.sendStatus(200);
    });
}