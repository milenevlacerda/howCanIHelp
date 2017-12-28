const { knex } = require('../config/db');

class SessionModel {
  static create(data) {
    return knex
      .insert(data)
      .into('Sessao');
  }

  static getAccount(token) {
    return knex
      .select()
      .from('Conta')
      .leftJoin('Sessao', 'Sessao.contaId', 'Conta.id')
      .leftJoin('ONG', 'ONG.contaId', 'Conta.id')
      .leftJoin('Usuario', 'Usuario.contaId', 'Conta.id')
      .where('Sessao.token', token)
      .options({ nestTables: true })
      .first();
  }
}

module.exports = SessionModel;
