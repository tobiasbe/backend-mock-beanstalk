'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.addUser = function addUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  Users.addUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUser = function deleteUser (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  Users.deleteUser(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserById = function getUserById (req, res, next) {
  var user_id = req.swagger.params['user_id'].value;
  Users.getUserById(user_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUser = function updateUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  Users.updateUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
