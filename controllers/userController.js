const User = require('../models/User');
const utils = require('../lib/utils');

//REVIEW
exports.findById = function (request, response) {
    User.findById(request.params.id, function (err, doc) {
        if (err) return response.status(400).send({ success: false, msg: "could not find user" });
        response.send(doc);
    });
}

exports.register = function (request, response) {
    if (!request.body) return response.sendStatus(400);

    const saltHash = utils.genPassword(request.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    User.create({
        login: request.body.login,
        hash: hash,
        salt: salt,
        address: request.body.address,
        firstName: request.body.firstName,
        phoneNumber: request.body.phoneNumber,
        email: request.body.email
    }, function (err, doc) {
        if (err) return response.status(401).send(err);
        response.send(doc._id);
    });

}

exports.login = function (request, response) {
    User.findOne({ login: request.body.login })
        .then((user) => {
            if (!user) {
                response.status(401).json({ success: false, msg: "could not find user" });
                return;
            }

            // Function defined at bottom of app.js
            const isValid = utils.validPassword(request.body.password, user.hash, user.salt);

            if (isValid) {
                const tokenObject = utils.issueJWT(user);
                response.status(200).json({ success: true, token: tokenObject.token, expiresIn: tokenObject.expires, isAdmin: user.isAdmin, userId: user._id });
            } else {
                response.status(401).json({ success: false, msg: "you entered the wrong password" });
            }

        })
        .catch((err) => {
            response.status(400).send(err);
        });
}

exports.changeLogin = function (request, response) {
    if (!request.body.value) return response.status(400).send({success: false, msg: "Value is empty"});

    const id = request.params.id;
    User.updateOne({ _id: id }, {login: request.body.value}, function(err, res){
        if (err) return response.status(400).send({success: false, msg: "User not found or incorrect value"});
        response.send(res);
    });
}

exports.changeEmail = function (request, response) {
    if (!request.body.value) return response.status(400).send({success: false, msg: "Value is empty"});

    const id = request.params.id;
    User.updateOne({ _id: id }, {email: request.body.value}, function(err, res){
        if (err) return response.status(400).send({success: false, msg: "User not found or incorrect value"});
        response.send(res);
    });
}

exports.changeName = function (request, response) {
    if (!request.body.value) return response.status(400).send({success: false, msg: "Value is empty"});

    const id = request.params.id;
    User.updateOne({ _id: id }, {firstName: request.body.value}, function(err, res){
        if (err) return response.status(400).send({success: false, msg: "User not found or incorrect value"});
        response.send(res);
    });
}

exports.changePhone = function (request, response) {
    if (!request.body.value) return response.status(400).send({success: false, msg: "Value is empty"});

    const id = request.params.id;
    User.updateOne({ _id: id }, {phoneNumber: request.body.value}, function(err, res){
        if (err) return response.status(400).send({success: false, msg: "User not found or incorrect value"});
        response.send(res);
    });
}

exports.changeAddress = function (request, response) {
    if (!request.body.value) return response.status(400).send({success: false, msg: "Value is empty"});

    const id = request.params.id;
    User.updateOne({ _id: id }, {address: request.body.value}, function(err, res){
        if (err) return response.status(400).send({success: false, msg: "User not found or incorrect value"});
        response.send(res);
    });
}


//TODO
exports.delete = function (request, response) {
    response.send('delete');

}

//TODO
exports.edit = function (request, response) {
    response.send('edit');
}