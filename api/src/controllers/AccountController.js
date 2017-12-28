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

  static getDonations(req, res) {
    if (res.locals.conta.isNgo) {
      res.status(400).send({
        message: 'Ong não pode fazer doações',
      });
      return;
    }

    const userId = res.locals.conta.id;
    const accountService = new AccountService();

    accountService
      .on('SUCCESS', (donations) => {
        res.send(donations);
      })
      .on('ERROR', (error) => {
        Logger.throw(res, '2365958507', error);
      });

    accountService.getDonations(userId);
  }

  static getProjects(req, res) {
    const accountId = res.locals.conta.id;
    const accountService = new AccountService();

    accountService
      .on('SUCCESS', (projects) => {
        res.send(projects);
      })
      .on('ERROR', (error) => {
        Logger.throw(res, '2365958507', error);
      });

    if (res.locals.conta.isNgo) {
      accountService.getNgoProjects(accountId);
    } else {
      console.log(accountId);
      
      accountService.getUserSupportedProjects(accountId);
    }
  }
}

module.exports = AccountController;
