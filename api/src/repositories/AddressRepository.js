const AddressModel = require('../models/AddressModel');

class AddressRepository {
  static async create(data) {
    try {
      const dbIds = await AddressModel.create(data);

      return dbIds[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AddressRepository;
