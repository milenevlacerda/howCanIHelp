const EventEmitter = require('events');
const _ = require('lodash');

// Repositories
const UserRepository = require('../repositories/UserRepository');
const AddressRepository = require('../repositories/AddressRepository');
const CreditCardRepository = require('../repositories/CreditCardRepository');
const AccountRepository = require('../repositories/AccountRepository');

class UserService extends EventEmitter {

  async create(data) {
    try {
      const contaId = await AccountRepository.create(data.dados_usuario);
      const cartaoId = await CreditCardRepository.create(data.cartao_credito)

      await UserRepository.create({ contaId, cartaoId });
      await AddressRepository.create(_.merge(data.endereco, { contaId }));

      this.emit('SUCCESS', contaId);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        this.emit('ALREADY_EXISTS');
        return;
      }

      this.emit('ERROR', error);
    }
  }
}

module.exports = UserService;
