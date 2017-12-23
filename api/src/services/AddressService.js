const AddressModel = require('../models/AddressModel');

class AddressService {
  // static listar() {
  //   return AddressModel.listar();
  // }

  // static obter(matricula) {
  //   return AddressModel.obter(matricula);
  // }

  static async create(data) {
    try {
      const dbIds = await AddressModel.create(data);

      return dbIds[0];
    } catch (error) {
      throw error;
    }
  }

  // static async editar(matricula, dados) {
  //   try {
  //     const edicao = await AddressModel.editar(matricula, dados);

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
  //     const delecao = await AddressModel.excluir(matricula);

  //     if (delecao) {
  //       return true;
  //     }

  //     return false;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

module.exports = AddressService;
