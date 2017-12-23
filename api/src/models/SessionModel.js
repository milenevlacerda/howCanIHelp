const { knex } = require('../config/db');

class SessionModel {
  static create(data) {
    return knex
      .insert(data)
      .into('Sessao');
  }
}

module.exports = SessionModel;
