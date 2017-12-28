const CreditCardModel = require('../models/CreditCardModel');

class CreditCardRepository {
  static async create(data) {
    try {
      if (!data) {
        return undefined
      }

      const dbIds = await CreditCardModel.create(data);

      return dbIds[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CreditCardRepository;
