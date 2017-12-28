const { knex } = require('../config/db');

class ProjectModel {

  static list() {
    return knex
      .select()
      .from('Projeto');
  }

  static get(projectId) {
    return knex
      .select()
      .from('Projeto')
      .where('Projeto.id', projectId)
      .first();
  }

  static create(data) {
    return knex
      .insert(data)
      .into('Projeto');
  }

  // static edit(idProjeto, dados) {
  //   return knex
  //     .update(dados)
  //     .from('Projeto')
  //     .where('idProjeto', idProjeto);
  // }

  // static deleteProject(idProjeto) {
  //   return knex
  //     .delete('*')
  //     .from('Projeto')
  //     .where('idProjeto', idProjeto)
  // }

  // static clean() {
  //   return knex
  //     .delete()
  //     .from('Projeto');
  // }
}

module.exports = ProjectModel;
