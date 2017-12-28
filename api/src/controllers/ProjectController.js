const Logger = require('../helpers/Logger');
const ProjectService = require('../services/ProjectService');

class ProjectController {

  static list(req, res) {
    const projectService = new ProjectService();

    projectService
      .on('SUCCESS', (projectList) => {
        res.send(projectList);
      })
      .on('ERROR', (error) => {
        Logger.throw(res, '2365958507', error);
      });

    projectService.list();
  }

  static get(req, res) {
    const { projectId } = req.params;
    const userId = res.locals.conta.isUser ? res.locals.conta.id : undefined;
    const projectService = new ProjectService();

    projectService
      .on('SUCCESS', (project) => {
        if (!project) {
          return res.send({
            mensagem: 'OOOPS, o Projeto não foi encontrado =( ',
          });
        }

        res.send(project);
      })
      .on('ERROR', (error) => {
        Logger.throw(res, '2365958507', error);
      });

    projectService.get(projectId, userId);
  }

  // static async get(req, res) {
  //   try {
  //     const { titulo } = req.params;

  //     const projects = await ProjectService.search(titulo);

  //     if (!projects) {
  //       res.send({ mensagem: 'OOOPS, o Projeto não foi encontrado =( ' });
  //       return;
  //     }

  //     res.send({ projects });
  //   } catch (error) {
  //     Logger.throw(res, '6001059324', error);
  //   }
  // }

  static post(req, res) {
    const projectService = new ProjectService();
    const ngoId = res.locals.conta.id;

    projectService
      .on('SUCCESS', (projectId) => {
        res.send({
          projectId
        });
      })
      .on('ERROR', (error) => {
        Logger.throw(res, '2365958507', error);
      });

    projectService.create(req.body, ngoId);
  }

  // static async put(req, res) {
  //   const { idProjeto } = req.params;
  //   const dados = req.body;

  //   try {
  //     const project = await ProjectService.edit(idProjeto, dados);

  //     if (!project) {
  //       res.send({ mensagem: 'OOOPS, o Projeto não foi encontrado =( ' });
  //       return;
  //     }

  //     res.sendStatus(204);
  //   } catch (error) {
  //     Logger.throw(res, '5768905470', error);
  //   }
  // }

  // static async delete(req, res) {
  //   try {
  //     const { idProjeto } = req.params;
  //     const sucesso = await ProjectService.deleteProject(idProjeto);

  //     if (!sucesso) {
  //       res.send({ mensagem: 'OOOPS, o Projeto não foi encontrado =( ' });
  //       return;
  //     }

  //     res.sendStatus(204);
  //   } catch (error) {
  //     Logger.throw(res, '5768905476', error);
  //   }
  // }
}

module.exports = ProjectController;
