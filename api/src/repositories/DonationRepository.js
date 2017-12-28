const DonationModel = require('../models/DonationModel');

class DonationRepository {

  static getOfProject(projectId, userId) {
    if (!projectId || !userId) {
      return [];
    }

    return DonationModel.getOfProject(projectId, userId);
  }

  static async create(data) {
    try {
      const [donationId] = await DonationModel.create(data);

      return donationId;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DonationRepository;
