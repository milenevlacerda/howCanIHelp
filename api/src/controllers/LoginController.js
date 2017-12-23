const Logger = require('../helpers/Logger');
const LoginService = require('../services/LoginService');

class LoginController {

  static post(req, res) {
    const loginService = new LoginService();

    loginService
      .on('SUCCESS', (token, tipo) => {
        res.send({ token, tipo });
      })
      .on('ACCOUNT_NOT_EXIST', () => {
        res.send({ mensagem: 'Login ou senha está incorreto' });
      })
      .on('ERROR', (error) => {
        Logger.throw(res, '2365958507', error);
      });

    loginService.login(req.body);
  }
}

module.exports = LoginController;
