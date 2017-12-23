const { knex } = require('../config/db');

class OngModel {
  static get(data) {
    return knex
      .select()
      .from('ONG')
      .where(data)
      .first();
  }
}

module.exports = OngModel;
