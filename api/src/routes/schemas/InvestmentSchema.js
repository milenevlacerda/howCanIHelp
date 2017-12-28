const Joi = require('joi');
const RouteValidator = require('../../middlewares/RouteValidator');

class InvestmentSchema extends RouteValidator {

  // static get list() {
  //   const schema = {};

  //   return this.validate(schema);
  // }

  // static get get() {
  //   const schema = {
  //     params: Joi.object().keys({
  //       titulo: Joi.string().required(),
  //     }),
  //   };

  //   return this.validate(schema);
  // }

  static get post() {
    const schema = {
      body: Joi.object().keys({
        titulo: Joi.string().required(),
        valor: Joi.number().integer().required(),
        capa: Joi.string().required(),
        descricao: Joi.string().required(),
        tipo: Joi.string().required(),
        projetoId: Joi.number().integer().required(),
      }),
    };

    return this.validate(schema);
  }

  // static get put() {
  //   const schema = {
  //     params: Joi.object().keys({
  //       idInvestmentos: Joi.number().integer().required(),
  //     }),
  //     body: Joi.object().keys({
  //       img: Joi.string(),
  //       descricao: Joi.string(),
  //       valor: Joi.number().integer().required(),
  //       tipoInvestimento: Joi.string().required()
  //     }),
  //   };

  //   return this.validate(schema);
  // }

  // static get delete() {
  //   const schema = {
  //     params: Joi.object().keys({
  //       idInvestmentos: Joi.number().integer().required()
  //     }),
  //   };

  //   return this.validate(schema);
  // }

}

module.exports = InvestmentSchema;
