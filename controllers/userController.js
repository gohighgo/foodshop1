const User = require('../models/User');

//REVIEW
exports.findById = function (request, response) {
    User.findById(request.params.id, function(err, doc){
        if (err) return response.status(400).send({error: 'User not found'});
        response.send(doc);
    });
}

exports.register = function (request, response) {
    if (!request.body) return response.sendStatus(400);

    User.create({
        login: request.body.login,
        password: request.body.password,
        address: request.body.address,
        firstName: request.body.firstName,
        phoneNumber: request.body.phoneNumber,
        email: request.body.email
    }, function (err, doc) {
        if (err) return response.status(400).send(err);
        response.send(doc._id);
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