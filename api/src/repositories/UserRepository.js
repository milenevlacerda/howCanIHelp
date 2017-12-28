const UserModel = require('../models/UserModel');

class UserRepository {

  static get(accountId) {
    return UserModel.get(accountId);
  }

  static create(data) {
    return UserModel.create(data);
  }
}

module.exports = UserRepository;