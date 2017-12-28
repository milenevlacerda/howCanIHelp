const Joi = require('joi');
const RouteValidator = require('../../middlewares/RouteValidator');

class AccountSchema extends RouteValidator {

  static get get() {
    const schema = {};

    return this.validate(schema);
  }
}

module.exports = AccountSchema;
