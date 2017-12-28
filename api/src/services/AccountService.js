const EventEmitter = require('events');
const _ = require('lodash');

// Repositories
const AccountRepository = require('../repositories/AccountRepository');
const UserRepository = require('../repositories/UserRepository');
const NgoRepository = require('../repositories/NgoRepository');

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
}

module.exports = AccountService;
