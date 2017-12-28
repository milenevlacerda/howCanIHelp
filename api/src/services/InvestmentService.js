const EventEmitter = require('events');
const _ = require('lodash');

// Repositories
const InvestmentRepository = require('../repositories/InvestmentRepository');

class InvestmentService extends EventEmitter {

  async create(data) {
    try {
      const investmentId = await InvestmentRepository.create(data);

      this.emit('SUCCESS', investmentId);
    } catch (error) {
      if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        this.emit('PROJECT_NOT_EXIST');
        return;
      }

      this.emit('ERROR', error);
    }
  }
}

module.exports = InvestmentService;
