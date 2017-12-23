const { knex } = require('../config/db');

class CreditCardModel {

  // static list() {
  //   return knex
  //     .select()
  //     .from('Cartao');
  // }

  // static search(idCreditCard) {
  //   return knex
  //     .select()
  //     .from('Cartao')
  //     .where('idCartao', idCreditCard)
  //     .first();
  // }

  static create(data) {
    return knex
      .insert(data)
      .into('Cartao');
  }

  // static edit(idCreditCard, dados) {
  //   return knex
  //     .update(dados)
  //     .from('Cartao')
  //     .where('idCartao', idCreditCard);
  // }

  // static deleteCreditCard(idCreditCard) {
  //   return knex
  //     .delete('*')
  //     .from('Cartao')
  //     .where('idCartao', idCreditCard)
  // }

  // static clean() {
  //   return knex
  //     .delete()
  //     .from('Cartao');
  // }
}

module.exports = CreditCardModel;
