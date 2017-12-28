const DonationModel = require('../models/DonationModel');

class DonationRepository {

  static getOfProject(projectId, userId) {
    if (!projectId || !userId) {
      return [];
    }

    return DonationModel.getOfProject(projectId, userId);
  }

  static getFromProject(projectId) {
    return DonationModel.getFromProject(projectId);
  }

  static getFromUser(userId) {
    return DonationModel.getFromUser(userId);
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
