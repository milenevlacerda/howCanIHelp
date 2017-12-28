const Logger = require('../helpers/Logger');
const InvestmentService = require('../services/InvestmentService');

class InvestmentController {

  // static async list(req, res) {
  //   try {
  //     const investment = await InvestmentService.list();

  //     res.send({ investment });
  //   } catch (error) {
  //     Logger.throw(res, '3272358416', error);
  //   }
  // }

  // static async get(req, res) {
  //   try {
  //     const { titulo } = req.params;

  //     const investment = await InvestmentService.search(titulo);

  //     if (!investment) {
  //       res.send({ mensagem: 'OOOPS, o Investimento não foi encontrado =( ' });
  //       return;
  //     }

  //     res.send({ investment });
  //   } catch (error) {
  //     Logger.throw(res, '6001059324', error);
  //   }
  // }

  static async post(req, res) {
    const investmentService = new InvestmentService();

    investmentService
      .on('SUCCESS', (investmentId) => {
        res.send({
          investmentId,
        });
      })
      .on('PROJECT_NOT_EXIST', () => {
        res.status(400).send({
          message: 'Projeto não existe',
        });
      })
      .on('ERROR', (error) => {
        Logger.throw(res, '2365958507', error);
      });

    investmentService.create(req.body);
  }

  // static async put(req, res) {
  //   const { idInvestmentos } = req.params;
  //   const dados = req.body;

  //   try {
  //     const investment = await InvestmentService.edit(idInvestmentos, dados);

  //     if (!investment) {
  //       res.send({ mensagem: 'OOOPS, o Investimento não foi encontrado =( ' });
  //       return;
  //     }

  //     res.sendStatus(204);
  //   } catch (error) {
  //     Logger.throw(res, '5768905470', error);
  //   }
  // }

  // static async delete(req, res) {
  //   try {
  //     const { idInvestmentos } = req.params;
  //     const sucesso = await InvestmentService.deleteInvestment(idInvestmentos);

  //     if (!sucesso) {
  //       res.send({ mensagem: 'OOOPS, o Investimento não foi encontrado =( ' });
  //       return;
  //     }

  //     res.sendStatus(204);
  //   } catch (error) {
  //     Logger.throw(res, '5768905476', error);
  //   }
  // }
}

module.exports = InvestmentController;
