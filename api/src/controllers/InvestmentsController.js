const Logger = require('../helpers/Logger');
const InvestmentService = require('../services/InvestmentService');

class InvestmentsController {

  static async list(req, res) {
    try {
      const investment = await InvestmentService.list();

      res.send({ investment });
    } catch (error) {
      Logger.throw(res, '3272358416', error);
    }
  }

  static async get(req, res) {
    try {
      const { titulo } = req.params;

      const investment = await InvestmentService.search(titulo);

      if (!investment) {
        res.send({ mensagem: 'OOOPS, o Investimento não foi encontrado =( ' });
        return;
      }

      res.send({ investment });
    } catch (error) {
      Logger.throw(res, '6001059324', error);
    }
  }

  static async post(req, res) {
    try {
      const idInvestmentos = await InvestmentService.create(req.body);

      res.send({ idInvestmentos });
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        const { idInvestmentos } = req.body;
        const investment = await InvestmentService.search(idInvestmentos);

        if (investment) {
          res.status(400).send({ mensagem: 'Investimento já cadastrado :) ' });
          return;
        }

        const edicao = await InvestmentService.edit(idInvestmentos, { deleted_at: null });

        if (edicao) {
          res.send({ idInvestmentos });
          return;
        }

        res.status(400).send({ mensagem: 'OOOPS, deu erro =( Tente novamente' });
        return;
      }

      Logger.throw(res, '2365958507', error);
    }
  }

  static async put(req, res) {
    const { idInvestmentos } = req.params;
    const dados = req.body;

    try {
      const investment = await InvestmentService.edit(idInvestmentos, dados);

      if (!investment) {
        res.send({ mensagem: 'OOOPS, o Investimento não foi encontrado =( ' });
        return;
      }

      res.sendStatus(204);
    } catch (error) {
      Logger.throw(res, '5768905470', error);
    }
  }

  static async delete(req, res) {
    try {
      const { idInvestmentos } = req.params;
      const sucesso = await InvestmentService.deleteInvestment(idInvestmentos);

      if (!sucesso) {
        res.send({ mensagem: 'OOOPS, o Investimento não foi encontrado =( ' });
        return;
      }

      res.sendStatus(204);
    } catch (error) {
      Logger.throw(res, '5768905476', error);
    }
  }
}

module.exports = InvestmentController;
