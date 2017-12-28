const Logger = require('../helpers/Logger');
const AccountService = require('../services/AccountService');

class AccountController {

  static get(req, res) {
    const accountId = res.locals.conta.id;
    const accountService = new AccountService();

    accountService
      .on('SUCCESS', (account) => {
        res.send(account);
      })
      .on('NOT_FOUND', () => {
        res.send({ mensagem: 'OOOPS, a conta não foi encontrado =( ' });
      })
      .on('ERROR', (error) => {
        Logger.throw(res, '2365958507', error);
      });

    accountService.get(accountId);
  }
}

module.exports = AccountController;
