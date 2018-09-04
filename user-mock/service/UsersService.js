'use strict';


/**
 * Add a new user
 * This endpoint can be used to add a new user
 *
 * body User user object that needs to be added
 * no response value expected for this operation
 **/
exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a user
 * 
 *
 * user_id Long User id to delete
 * no response value expected for this operation
 **/
exports.deleteUser = function(user_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find user by ID
 * Returns a single user
 *
 * user_id Long ID of user to return
 * returns User
 **/
exports.getUserById = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "dummy",
  "id" : 0,
  "avatar" : "https://upload.wikimedia.org/wikipedia/commons/7/7//Profile_avatar_placeholder_large.png",
  "status" : "active"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing user
 * 
 *
 * body User User object that needs to be updated
 * no response value expected for this operation
 **/
exports.updateUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

