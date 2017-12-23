const Logger = require('../helpers/Logger');
const ProjectService = require('../services/ProjectService');

class ProjectController {

  static async list(req, res) {
    try {
      const projects = await ProjectService.list();

      res.send({ projects });
    } catch (error) {
      Logger.throw(res, '3272358416', error);
    }
  }

  static async get(req, res) {
    try {
      const { titulo } = req.params;

      const projects = await ProjectService.search(titulo);

      if (!projects) {
        res.send({ mensagem: 'OOOPS, o Projeto não foi encontrado =( ' });
        return;
      }

      res.send({ projects });
    } catch (error) {
      Logger.throw(res, '6001059324', error);
    }
  }

  static async post(req, res) {
    try {
      const idProjeto = await ProjectService.create(req.body);

      res.send({ idProjeto });
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        const { idProjeto } = req.body;
        const projects = await ProjectService.search(idProjeto);

        if (projects) {
          res.status(400).send({ mensagem: 'Projeto já cadastrado :) ' });
          return;
        }

        const edicao = await ProjectService.edit(idProjeto, { deleted_at: null });

        if (edicao) {
          res.send({ idProjeto });
          return;
        }

        res.status(400).send({ mensagem: 'OOOPS, deu erro =( Tente novamente' });
        return;
      }

      Logger.throw(res, '2365958507', error);
    }
  }

  static async put(req, res) {
    const { idProjeto } = req.params;
    const dados = req.body;

    try {
      const project = await ProjectService.edit(idProjeto, dados);

      if (!project) {
        res.send({ mensagem: 'OOOPS, o Projeto não foi encontrado =( ' });
        return;
      }

      res.sendStatus(204);
    } catch (error) {
      Logger.throw(res, '5768905470', error);
    }
  }

  static async delete(req, res) {
    try {
      const { idProjeto } = req.params;
      const sucesso = await ProjectService.deleteProject(idProjeto);

      if (!sucesso) {
        res.send({ mensagem: 'OOOPS, o Projeto não foi encontrado =( ' });
        return;
      }

      res.sendStatus(204);
    } catch (error) {
      Logger.throw(res, '5768905476', error);
    }
  }
}

module.exports = ProjectController;
