const AccountModel = require('../models/AccountModel');

class AccountService {

  static get(data) {
    return AccountModel.get(data);
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

module.exports = AccountService;
