const CreditCardModel = require('../models/CreditCardModel');

class CreditCardService {
  // static listar() {
  //   return CreditCardModel.listar();
  // }

  // static obter(matricula) {
  //   return CreditCardModel.obter(matricula);
  // }

  static async create(data) {
    try {
      if (!data) {
        return undefined;
      }

      const dbIds = await CreditCardModel.create(data);

      return dbIds[0];
    } catch (error) {
      throw error;
    }
  }

  // static async editar(matricula, dados) {
  //   try {
  //     const edicao = await CreditCardModel.editar(matricula, dados);

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
  //     const delecao = await CreditCardModel.excluir(matricula);

  //     if (delecao) {
  //       return true;
  //     }

  //     return false;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

module.exports = CreditCardService;
