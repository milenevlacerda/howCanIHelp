const { knex } = require('../config/db');

class AddressModel {

  // static list() {
  //   return knex
  //     .select()
  //     .from('Endereco')
  // }

  // static search(idAddress) {
  //   return knex
  //     .select()
  //     .from('Endereco')
  //     .where('idEndereco', idAddress)
  //     .first();
  // }

  static create(data) {
    return knex
      .insert(data)
      .into('Endereco');
  }

  // static edit(idAddress, dados) {
  //   return knex
  //     .update(dados)
  //     .from('Endereco')
  //     .where('idEndereco', idAddress);
  // }

  // static deleteAddress(idAddress) {
  //   return knex
  //     .delete('*')
  //     .from('Endereco')
  //     .where('idEndereco', idAddress)
  // }

  // static clean() {
  //   return knex
  //     .delete()
  //     .from('Endereco');
  // }
}

module.exports = AddressModel;
