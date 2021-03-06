const Joi = require('joi');
const RouteValidator = require('../../middlewares/RouteValidator');

class ProjectSchema extends RouteValidator {

  static get list() {
    const schema = {};

    return this.validate(schema);
  }

  static get get() {
    const schema = {
      params: Joi.object().keys({
        projectId: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }

  static get post() {
    const schema = {
      body: Joi.object().keys({
        titulo: Joi.string().required(),
        categoria: Joi.string().required(),
        capa: Joi.string().required(),
        descricao: Joi.string().required(),
        tipoDoacao: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }

  static get postDonation() {
    const schema = {
      params: Joi.object().keys({
        projectId: Joi.string().required(),
      }),
      body: Joi.object().keys({
        valor: Joi.number().integer().required(),
        tipo: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }

  static get getDonation() {
    const schema = {
      params: Joi.object().keys({
        projectId: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }

  // static get put() {
  //   const schema = {
  //     params: Joi.object().keys({
  //       idProjeto: Joi.number().integer().required(),
  //     }),
  //     body: Joi.object().keys({
  //       categoria: Joi.string(),
  //       img: Joi.string(),
  //       descricao: Joi.string()
  //     }),
  //   };

  //   return this.validate(schema);
  // }

  // static get delete() {
  //   const schema = {
  //     params: Joi.object().keys({
  //       idProjeto: Joi.number().integer().required(),
  //     }),
  //   };

  //   return this.validate(schema);
  // }

}

module.exports = ProjectSchema;
