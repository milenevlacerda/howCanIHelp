const { knex } = require('../config/db');

class NgoModel {
  static get(accountId) {
    return knex
      .select()
      .from('ONG')
      .where('ContaId', accountId)
      .first();
  }

  static create(data) {
    return knex
      .insert(data)
      .into('ONG');
  }
}

module.exports = NgoModel;
