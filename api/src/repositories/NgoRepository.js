const NgoModel = require('../models/NgoModel');

class NgoRepository {

  static get(accountId) {
    return NgoModel.get(accountId);
  }

  static create(data) {
    return NgoModel.create(data);
  }
}

module.exports = NgoRepository;
