const DonationModel = require('../models/DonationModel');

class DonationRepository {

  static getOfProject(projectId, userId) {
    if (!projectId || !userId) {
      return [];
    }

    return DonationModel.getOfProject(projectId, userId);
  }
}

module.exports = DonationRepository;
