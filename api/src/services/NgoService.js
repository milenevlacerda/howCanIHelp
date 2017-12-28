const EventEmitter = require('events');
const _ = require('lodash');

// Repositories
const AccountRepository = require('../repositories/AccountRepository');
const AddressRepository = require('../repositories/AddressRepository');
const NgoRepository = require('../repositories/NgoRepository');
const ProjectRepository = require('../repositories/ProjectRepository');

class NgoService extends EventEmitter {

  async get(ngoId) {
    try {
      const ngo = await NgoRepository.get(ngoId);

      ngo.projetos = await ProjectRepository.getFromNgo(ngoId);

      this.emit('SUCCESS', ngo);
    } catch (error) {
      this.emit('ERROR', error);
    }
  }

  async create(data) {
    try {
      const contaId = await AccountRepository.create(data.usuario);

      const address = _.merge(data.endereco, { contaId });
      const ngo = {
        contaId,
        dataNasc: data.ong.data_nasc,
        numRegistroPref: data.ong.registro_prefeitura,
        inscEstadual: data.ong.inscricao_estadual,
        numFuncionarios: data.ong.funcionarios,
        areaAtuacao: data.ong.area_atuacao,
        tipo: data.ong.tipo,
      };

      await AddressRepository.create(address);
      await NgoRepository.create(ngo);

      this.emit('SUCCESS', contaId);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        this.emit('ALREADY_EXISTS');
        return;
      }

      this.emit('ERROR', error);
    }
  }
}

module.exports = NgoService;
