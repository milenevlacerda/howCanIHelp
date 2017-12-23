const { knex } = require('../config/db');

class AccountModel {

  static get(data) {
    return knex
      .select()
      .from('Conta')
      .where(data)
      .first();
  }

  static create(data) {
    return knex
      .insert(data)
      .into('Conta');
  }
}

module.exports = AccountModel;
