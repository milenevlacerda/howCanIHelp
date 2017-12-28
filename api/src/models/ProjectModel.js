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

  static getFromNgo(ngoId) {
    return knex
      .select('*')
      .from('Projeto')
      .where('Projeto.ongId', ngoId);
  }

  static create(data) {
    return knex
      .insert(data)
      .into('Projeto');
  }

  static getSupportedByUser(userId) {
    return knex
      .select('Projeto.*')
      .from('Projeto')
      .leftJoin('Doacao', 'Doacao.projetoId', 'Projeto.id')
      .distinct('Projeto.id')
      .where('Doacao.usuarioId', userId);
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
