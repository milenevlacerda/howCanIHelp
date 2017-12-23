const EventEmitter = require('events');
const _ = require('lodash');
const UserModel = require('../models/UserModel');
const AddressService = require('../services/AddressService');
const CreditCardService = require('../services/CreditCardService');
const AccountService = require('../services/AccountService');

class UserService extends EventEmitter {
  // static listar() {
  //   return UserModel.listar();
  // }

  static get(data) {
    return UserModel.get(data);
  }

  async create(data) {
    try {
      const contaId = await AccountService.create(data.dados_usuario);
      const cartaoId = await CreditCardService.create(data.cartao_credito)

      await UserModel.create({ contaId, cartaoId });
      await AddressService.create(_.merge(data.endereco, { contaId }));

      this.emit('SUCCESS', contaId);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        this.emit('ALREADY_EXISTS');
        return;
      }

      this.emit('ERROR', error);
    }
  }

  // static async editar(matricula, dados) {
  //   try {
  //     const edicao = await UserModel.editar(matricula, dados);

  //     if (edicao) {
  //       return true;
  //     }

  //     return false;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // static async excluir(matricula) {
  //   try {
  //     const delecao = await UserModel.excluir(matricula);

  //     if (delecao) {
  //       return true;
  //     }

  //     return false;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

module.exports = UserService;
