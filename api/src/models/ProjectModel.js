const { knex } = require('../config/db');

const CAMPOS_PROJETO = [
  'Projeto.titulo',
  'Projeto.img',
  'Projeto.categoria',
  'Projeto.tipoDoacao',
];

class ProjectModel {

  static list() {
    return knex
      .select(CAMPOS_PROJETO)
      .from('Projeto')
  }

  static search(idProjeto) {
    return knex
      .select(CAMPOS_PROJETO)
      .from('Projeto')
      .where('idProjeto', idProjeto)
      .first();
  }

  static create(data) {
    return knex
      .insert(data)
      .into('Projeto');
  }

  static edit(idProjeto, dados) {
    return knex
      .update(dados)
      .from('Projeto')
      .where('idProjeto', idProjeto);
  }

  static deleteProject(idProjeto) {
    return knex
      .delete('*')
      .from('Projeto')
      .where('idProjeto', idProjeto)
  }

  static clean() {
    return knex
      .delete()
      .from('Projeto');
  }
}

module.exports = ProjectModel;
