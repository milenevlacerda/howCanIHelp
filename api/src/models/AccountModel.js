const { knex } = require('../config/db');

class AccountModel {

  static getByEmailAndPassword(email, password) {
    return knex
      .select()
      .from('Conta')
      .where({
        email,
        senha: password,
      })
      .first();
  }

  static get(accountId) {
    return knex
      .select()
      .from('Conta')
      .where('id', accountId)
      .first();
  }

  static create(data) {
    return knex
      .insert(data)
      .into('Conta');
  }
}

module.exports = AccountModel;
