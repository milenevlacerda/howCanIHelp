const EventEmitter = require('events');
const _ = require('lodash');

// Repositories
const AccountRepository = require('../repositories/AccountRepository');
const UserRepository = require('../repositories/UserRepository');
const NgoRepository = require('../repositories/NgoRepository');
const DonationRepository = require('../repositories/DonationRepository');
const ProjectRepository = require('../repositories/ProjectRepository');

class AccountService extends EventEmitter {

  async get(accountId) {
    try {      
      const account = await AccountRepository.get(accountId);
      let conta;

      if (!account) {
        this.emit('NOT_FOUND');
        return;
      }

      const user = await UserRepository.get(accountId);
      const ngo = await NgoRepository.get(accountId);

      if (user) {
        conta = { conta: account, usuario: user };
      } else if (ngo) {
        conta = { conta: account, ONG: ngo };
      }

      this.emit('SUCCESS', conta);
    } catch (error) {
      this.emit('ERROR', error);
    }
  }

  async getDonations(userId) {
    try {
      const donations = await DonationRepository.getFromUser(userId);

      this.emit('SUCCESS', donations);
    } catch (error) {
      this.emit('ERROR', error);
    }
  }

  async getNgoProjects(ngoId) {
    try {
      const projects = await ProjectRepository.getFromNgo(ngoId);

      this.emit('SUCCESS', projects);
    } catch (error) {
      this.emit('ERROR', error);
    }
  }

  async getUserSupportedProjects(userId) {
    try {
      const projects = await ProjectRepository.getSupportedByUser(userId);

      this.emit('SUCCESS', projects);
    } catch (error) {
      this.emit('ERROR', error);
    }
  }
}

module.exports = AccountService;
