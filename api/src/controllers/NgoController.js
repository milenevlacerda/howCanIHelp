const Logger = require('../helpers/Logger');
const NgoService = require('../services/NgoService');

class NgoController {
  static get(req, res) {
    const { ngoId } = req.params;
    const ngoService = new NgoService();

    ngoService
      .on('SUCCESS', (ngo) => {
        res.send(ngo);
      })
      .on('ERROR', (error) => {
        Logger.throw(res, '2365958507', error);
      });

    ngoService.get(ngoId);
  }

  static post(req, res) {
    const ngoService = new NgoService();

    ngoService
      .on('SUCCESS', (contaId) => {
        res.send({ contaId });
      })
      .on('ALREADY_EXISTS', () => {
        res.status(409).send({ mensagem: 'Usuário já cadastrado' });
      })
      .on('ERROR', (error) => {
        Logger.throw(res, '2365958507', error);
      });

    ngoService.create(req.body);
  }
}

module.exports = NgoController;
