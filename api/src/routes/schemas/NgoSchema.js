const Joi = require('joi');
const RouteValidator = require('../../middlewares/RouteValidator');

class NgoSchema extends RouteValidator {
  static get get() {
    const schema = {
      params: Joi.object().keys({
        ngoId: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }

  static get post() {
    const schema = {
      body: Joi.object().keys({
        usuario: Joi.object().keys({
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
        ong: Joi.object().keys({
          registro_prefeitura: Joi.string().required(),
          inscricao_estadual: Joi.string().required(),
          funcionarios: Joi.string().required(),
          data_nasc: Joi.string().required(),
          tipo: Joi.string().required(),
          area_atuacao: Joi.string().required(),
        }),
      }),
    };

    return this.validate(schema);
  }
}

module.exports = NgoSchema;
