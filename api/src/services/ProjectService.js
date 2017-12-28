const EventEmitter = require('events');
const _ = require('lodash');

// Repositories
const ProjectRepository = require('../repositories/ProjectRepository');
const InvestmentRepository = require('../repositories/InvestmentRepository');
const DonationRepository = require('../repositories/DonationRepository');

class ProjectService extends EventEmitter {

  async list() {
    try {
      const projectList = await ProjectRepository.list();

      this.emit('SUCCESS', projectList);
    } catch (error) {
      this.emit('ERROR', error);
    }
  }

  async get(projectId, userId) {
    try {
      const project = await ProjectRepository.get(projectId);

      if (project) {
        project.investimentos = await InvestmentRepository.getOfProject(projectId);
        project.doacoes = await DonationRepository.getOfProject(projectId, userId);
      }

      this.emit('SUCCESS', project);
    } catch (error) {
      this.emit('ERROR', error);
    }
  }

  async create(data, ngoId) {
    try {
      const project = _.merge(data, {
        ongId: ngoId,
      });

      const projectId = await ProjectRepository.create(project);

      this.emit('SUCCESS', projectId);
    } catch (error) {
      this.emit('ERROR', error);
    }
  }

  async createDonation(data) {
    try {
      const donationId = await DonationRepository.create(data);
      
      this.emit('SUCCESS', donationId);
    } catch(error) {
      this.emit('ERROR', error);
    }
  }

  async getDonations(projectId) {
    try {
      const donations = await DonationRepository.getFromProject(projectId);

      this.emit('SUCCESS', donations);
    } catch (error) {
      this.emit('ERROR', error);
    }
  }

  // static async criar(dados) {
  //   try {
  //     const dbIds = await ProjectModel.criar(dados);

  //     return dbIds[0];
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // static async editar(idProjeto, dados) {
  //   try {
  //     const edicao = await ProjectModel.editar(idProjeto, dados);

  //     if (edicao) {
  //       return true;
  //     }

  //     return false;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // static async excluir(idProjeto) {
  //   try {
  //     const delecao = await ProjectModel.excluir(idProjeto);

  //     if (delecao) {
  //       return true;
  //     }

  //     return false;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

module.exports = ProjectService;
