const Joi = require('joi');
const RouteValidator = require('../../middlewares/RouteValidator');

class UserSchema extends RouteValidator {
  static get list() {
    const schema = {};

    return this.validate(schema);
  }

  static get get() {
    const schema = {
      params: Joi.object().keys({
        password: Joi.string().required(),
        email: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }

  static get post() {
    const schema = {
      body: Joi.object().keys({
        dados_usuario: Joi.object().keys({
          nome: Joi.string().required(),
          email: Joi.string().required(),
          senha: Joi.string().required(),
          telefone: Joi.string().required(),
        }).required(),
        endereco: Joi.object().keys({
          cep: Joi.string().required(),
          rua: Joi.string().required(),
          numero: Joi.number().integer().required(),
          bairro: Joi.string().required(),
          cidade: Joi.string().required(),
          estado: Joi.string().required(),
        }).required(),
        cartao_credito: Joi.object().keys({
          numeroCartao: Joi.number().integer().required(),
          nome: Joi.string().required(),
          vencimento: Joi.date().required(),
          cvv: Joi.string().required(),
        }),
      }),
    };

    return this.validate(schema);
  }

  // static get put() {
  //   const schema = {
  //     params: Joi.object().keys({
  //       idUser: Joi.number().integer().required(),
  //     }),
  //     body: Joi.object().keys({
  //       nome: Joi.string().required(),
  //       email: Joi.string().required(),
  //       senha: Joi.string().required(),
  //       telefone: Joi.string().required(),
  //       cep: Joi.string().required(),
  //       rua: Joi.string().required(),
  //       numero: Joi.number().integer().required(),
  //       bairro: Joi.string().required(),
  //       cidade: Joi.string().required(),
  //       estado: Joi.string().required(),
  //     }),
  //   };

  //   return this.validate(schema);
  // }

  // static get delete() {
  //   const schema = {
  //     params: Joi.object().keys({
  //       idUser: Joi.number().integer().required()
  //     }),
  //   };

  //   return this.validate(schema);
  // }
}

module.exports = UserSchema;
