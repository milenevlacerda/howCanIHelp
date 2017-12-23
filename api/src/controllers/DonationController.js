const Logger = require('../helpers/Logger');
const DonationService = require('../services/DonationService');

class DonationController {

  static async list(req, res) {
    try {
      const donation = await DonationService.list();

      res.send({ donation });
    } catch (error) {
      Logger.throw(res, '3272358416', error);
    }
  }

  static async get(req, res) {
    try {
      const { projeto } = req.params;

      const donation = await DonationService.search(projeto);

      if (!donation) {
        res.send({ mensagem: 'OOOPS, Doação não encontrada =( ' });
        return;
      }

      res.send({ donation });
    } catch (error) {
      Logger.throw(res, '6001059324', error);
    }
  }

  static async post(req, res) {
    try {
      const idDonation = await DonationService.create(req.body);

      res.send({ idDonation });
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        const { idDonation } = req.body;
        const donation = await DonationService.search(idDonation);

        const edicao = await DonationService.edit(idDonation, { deleted_at: null });

        if (edicao) {
          res.send({ idDonation });
          return;
        }

        res.status(400).send({ mensagem: 'OOOPS, deu erro =( Tente novamente' });
        return;
      }

      Logger.throw(res, '2365958507', error);
    }
  }
}

module.exports = DonationController;
