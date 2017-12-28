const { knex } = require('../config/db');

class DonationModel {

  static getOfProject(projectId, userId) {
    return knex
      .select()
      .from('Doacao')
      .where('projetoId', projectId)
      .where('usuarioId', userId);
  }

  static getFromProject(projectId) {
    return knex
      .select()
      .from('Doacao')
      .where('projetoId', projectId);
  }

  static create(data) {
    return knex
      .insert(data)
      .into('Doacao');
  }

  // static list() {
  //   return knex
  //     .select(CAMPOS_DOACAO)
  //     .from('Doacao')
  // }

  // static search(idUser) {
  //   return knex
  //     .select(CAMPOS_DOACAO)
  //     .from('Doacao')
  //     .where('idUser', idUser)
  //     .first();
  // }

  // static clean() {
  //   return knex
  //     .delete()
  //     .from('Doacao');
  // }
}

module.exports = DonationModel;
