const { knex } = require('../config/db');

class InvestmentModel {

  // static list() {
  //   return knex
  //     .select(CAMPOS_INVESTIMENTOS)
  //     .from('Investimentos')
  // }

  // static search(idInvestimentos) {
  //   return knex
  //     .select(CAMPOS_PROJECT)
  //     .from('Investimentos')
  //     .where('idInvestimentos', idInvestimentos)
  //     .first();
  // }

  static getOfProject(projectId) {
    return knex
      .select()
      .from('Investimentos')
      .where('projetoId', projectId);
  }

  static create(data) {
    return knex
      .insert(data)
      .into('Investimentos');
  }

  // static edit(idInvestimentos, dados) {
  //   return knex
  //     .update(dados)
  //     .from('Investimentos')
  //     .where('idInvestimentos', idInvestimentos);
  // }

  // static deleteInvestment(idInvestimentos) {
  //   return knex
  //     .delete('*')
  //     .from('Investimentos')
  //     .where('idInvestimentos', idInvestimentos)
  // }

  // static clean() {
  //   return knex
  //     .delete()
  //     .from('Investimentos');
  // }
}

module.exports = InvestmentModel;
