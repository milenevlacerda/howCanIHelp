const Logger = require('../helpers/Logger');
const SessionRepository = require('../repositories/SessionRepository');
const TokenHelper = require('../helpers/Token');

class Auth {

  static async validate(req, res, next) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        res.status(401).send({
          message: 'Cade seu token bb?',
        });
      }

      const conta = await SessionRepository.getAccount(token);

      if (!conta) {
        res.status(401).send({
          message: 'Token inválido',
        });
      }

      const tokenContent = TokenHelper.decrypt(token);

      if (conta.email === tokenContent) {
        res.locals.conta = conta;

        next();
      } else {
        res.status(401).send({
          message: 'Houve um problema com o seu token, faça login novamente',
        });
      }  
    } catch (error) {
      Logger.throw(res, '2365958507', error);
    }
  }
}

module.exports = Auth;
