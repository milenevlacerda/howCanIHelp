const { knex } = require('../config/db');

class UserModel {
  static list() {
    return knex
      .select()
      .from('Usuario');
  }

  static get(data) {
    return knex
      .select()
      .from('Usuario')
      .where(data)
      .first();
  }

  static create(data) {
    return knex
      .insert(data)
      .into('Usuario');
  }

  static edit(idUser, dados) {
    return knex
      .update(dados)
      .from('Usuario')
      .where('idUsuario', idUser);
  }

  static deleteUser(idUser) {
    return knex
      .delete('*')
      .from('Usuario')
      .where('idUsuario', idUser);
  }

  static clean() {
    return knex
      .delete()
      .from('Usuario');
  }
}

module.exports = UserModel;
