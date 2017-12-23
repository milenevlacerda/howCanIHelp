const EventEmitter = require('events');
const TokenHelper = require('../helpers/Token');
const AccountService = require('./AccountService');
const SessionService = require('./SessionService');
const UserService = require('./UserService');
const OngService = require('./OngService');

class LoginService extends EventEmitter {

  async login(data) {
    try {
      const conta = await AccountService.get(data);

      if (!conta) {
        this.emit('ACCOUNT_NOT_EXIST');
        return;
      }

      const token = TokenHelper.encrypt(conta.email);

      const sessao = {
        token,
        contaId: conta.id,
      };

      await SessionService.create(sessao);

      const user = await UserService.get({ contaId: conta.id });
      const ong = await OngService.get({ contaId: conta.id });

      if (!user && !ong) {
        this.emit('ERROR');
      }

      const tipo = user ? 'user' : 'ong';

      this.emit('SUCCESS', token, tipo);
    } catch (error) {
      this.emit('ERROR', error);
    }
  }
}

module.exports = LoginService;
