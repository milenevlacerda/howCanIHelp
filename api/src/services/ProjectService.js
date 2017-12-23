const ProjectModel = require('../models/ProjectModel');

class ProjectService {
  static listar() {
    return ProjectModel.listar();
  }

  static obter(idProjeto) {
    return ProjectModel.obter(idProjeto);
  }

  static async criar(dados) {
    try {
      const dbIds = await ProjectModel.criar(dados);

      return dbIds[0];
    } catch (error) {
      throw error;
    }
  }

  static async editar(idProjeto, dados) {
    try {
      const edicao = await ProjectModel.editar(idProjeto, dados);

      if (edicao) {
        return true;
      }

      return false;
    } catch (error) {
      throw error;
    }
  }

  static async excluir(idProjeto) {
    try {
      const delecao = await ProjectModel.excluir(idProjeto);

      if (delecao) {
        return true;
      }

      return false;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProjectService;
