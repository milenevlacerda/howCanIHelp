const InvestmentModel = require('../models/InvestmentModel');

class InvestmentRepository {

  static getOfProject(projectId) {
    return InvestmentModel.getOfProject(projectId);
  }

  static async create(data) {
    try {
      const [investmentId] = await InvestmentModel.create(data);

      return investmentId;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = InvestmentRepository;
