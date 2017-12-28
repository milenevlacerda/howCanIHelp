const Logger = require('../helpers/Logger');
const UserService = require('../services/UserService');

class UserController {
  // static async list(req, res) {
  //   try {
  //     const user = await UserService.list();

  //     res.send({ user });
  //   } catch (error) {
  //     Logger.throw(res, '3272358416', error);
  //   }
  // }

  // static async get(req, res) {
  //   try {
  //     console.log(req);
  //     const data = req.body.dadosUsuario;
  //     data.email = req.body.email;
  //     data.senha = req.body.password;

  //     const user = await UserService.get(data);

  //     if (!user) {
  //       res.send({ mensagem: 'OOOPS, o Usuário não foi registrado =( ' });
  //       return;
  //     }

  //     res.send({ user });
  //   } catch (error) {
  //     Logger.throw(res, '6001059324', error);
  //   }
  // }

  static post(req, res) {
    const userService = new UserService();

    userService
      .on('SUCCESS', (contaId) => {
        res.send({ contaId });
      })
      .on('ALREADY_EXISTS', () => {
        res.status(409).send({ mensagem: 'Usuário já cadastrado' });
      })
      .on('ERROR', (error) => {
        Logger.throw(res, '2365958507', error);
      });

    userService.create(req.body);
  }

  // static async put(req, res) {
  //   const { idUsuario } = req.params;
  //   const dados = req.body;

  //   try {
  //     const user = await UserService.edit(idUsuario, dados);

  //     if (!user) {
  //       res.send({ mensagem: 'OOOPS, o Usuário não foi encontrado =( ' });
  //       return;
  //     }

  //     res.sendStatus(204);
  //   } catch (error) {
  //     Logger.throw(res, '5768905470', error);
  //   }
  // }

  // static async delete(req, res) {
  //   try {
  //     const { idUsuario } = req.params;
  //     const sucesso = await UserService.deleteUser(idUsuario);

  //     if (!sucesso) {
  //       res.send({ mensagem: 'OOOPS, o Usuário não foi encontrado =( ' });
  //       return;
  //     }

  //     res.sendStatus(204);
  //   } catch (error) {
  //     Logger.throw(res, '5768905476', error);
  //   }
  // }
}

module.exports = UserController;
