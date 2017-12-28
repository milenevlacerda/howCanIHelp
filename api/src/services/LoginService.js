const EventEmitter = require('events');
const TokenHelper = require('../helpers/Token');

// Repositories
const AccountRepository = require('../repositories/AccountRepository');
const SessionRepository = require('../repositories/SessionRepository');
const UserRepository = require('../repositories/UserRepository');
const NgoRepository = require('../repositories/NgoRepository');

class LoginService extends EventEmitter {

  async login(data) {
    try {
      const conta = await AccountRepository.getByEmailAndPassword(data.email, data.senha);

      if (!conta) {
        this.emit('ACCOUNT_NOT_EXIST');
        return;
      }

      const token = TokenHelper.encrypt(conta.email);

      const sessao = {
        token,
        contaId: conta.id,
      };

      await SessionRepository.create(sessao);

      const user = await UserRepository.get(conta.id);
      const ngo = await NgoRepository.get(conta.id);

      if (!user && !ngo) {
        this.emit('ERROR');
      }

      const tipo = user ? 'user' : 'ngo';

      this.emit('SUCCESS', token, tipo);
    } catch (error) {
      this.emit('ERROR', error);
    }
  }
}

module.exports = LoginService;
