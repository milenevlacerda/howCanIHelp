const { knex } = require('../config/db');

const CAMPOS_DOACAO = [
  'Doacao.nome',
  'Doacao.email',
  'Doacao.senha',
  'Doacao.telefone'
];

class DonationModel {

  static list() {
    return knex
      .select(CAMPOS_DOACAO)
      .from('Doacao')
  }

  static search(idUser) {
    return knex
      .select(CAMPOS_DOACAO)
      .from('Doacao')
      .where('idUser', idUser)
      .first();
  }

  static create(data) {
    return knex
      .insert(data)
      .into('Doacao');
  }

  static clean() {
    return knex
      .delete()
      .from('Doacao');
  }
}

module.exports = DonationModel;
