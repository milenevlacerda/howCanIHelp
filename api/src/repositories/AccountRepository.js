const AccountModel = require('../models/AccountModel');

class AccountRepository {

  static getByEmailAndPassword(email, password) {
    return AccountModel.getByEmailAndPassword(email, password);
  }

  static get(accountId) {
    return AccountModel.get(accountId);
  }

  static async create(data) {
    try {
      const dbIds = await AccountModel.create(data);

      return dbIds[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AccountRepository;
