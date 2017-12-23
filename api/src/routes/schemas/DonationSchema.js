const Joi = require('joi');
const RouteValidator = require('../../middlewares/RouteValidator');

class DonationSchema extends RouteValidator {

  static get list() {
    const schema = {};

    return this.validate(schema);
  }

  static get get() {
    const schema = {
      params: Joi.object().keys({
        projeto: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }

  static get post() {
    const schema = {
      body: Joi.object().keys({
        projeto: Joi.string().required(),
        valor: Joi.number().required(),
        tipo: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }

}

module.exports = DonationSchema;
