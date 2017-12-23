const OngModel = require('../models/OngModel');

class OngService {

  static get(data) {
    return OngModel.get(data);
  }
}

module.exports = OngService;
