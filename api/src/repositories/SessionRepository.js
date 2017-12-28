const SessionModel = require('../models/SessionModel');
const _ = require('lodash');

class SessionRepository {

  static async create(data) {
    try {
      const [sessionId] = await SessionModel.create(data);

      return sessionId;
    } catch (error) {
      throw error;
    }
  }

  static async getAccount(token) {
    try {
      const account = await SessionModel.getAccount(token);

      if (!account) {
        return account;
      }

      if (account.ONG.contaId) {
        return _.merge(account.Conta, { isNgo: true });
      }

      if (account.Usuario.contaId) {
        return _.merge(account.Conta, { isUser: true });
      }

      return account.Conta;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SessionRepository;
