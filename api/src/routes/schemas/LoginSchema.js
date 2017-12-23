const Joi = require('joi');
const RouteValidator = require('../../middlewares/RouteValidator');

class LoginSchema extends RouteValidator {

  static get post() {
    const schema = {
      body: Joi.object().keys({
        email: Joi.string().required(),
        senha: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }

  // static get delete() {
  //   const schema = {
  //     params: Joi.object().keys({
  //       idLogin: Joi.number().integer().required()
  //     }),
  //   };

  //   return this.validate(schema);
  // }
}

module.exports = LoginSchema;
