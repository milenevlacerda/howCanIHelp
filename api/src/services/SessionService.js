const SessionModel = require('../models/SessionModel');

class SessionService {

  static async create(data) {
    try {
      const [sessionId] = await SessionModel.create(data);

      return sessionId;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SessionService;
