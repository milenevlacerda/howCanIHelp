const moment = require('moment-timezone');
const StringMask = require('string-mask');
const timezone = 'America/Sao_Paulo';

class Conversion {

  static getDate() {
    return moment.utc();
  }

  static getLocal() {
    return moment.tz(timezone);
  }

  static toLocal(datetime) {
    return moment.utc(datetime).tz(timezone);
  }

  static toUTC(datetime) {
    return moment.tz(datetime, timezone).utc();
  }

  static ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static toUnixEpoch(dateString) {
    return moment.utc(dateString).valueOf();
  }

  /* https://github.com/the-darc/string-mask */
  static format(string, mask) {
    return StringMask.apply(string, mask);
  }

  static number(num) {
    return String(num).replace(/[^0-9]/g, '');
  }

  static float(num) {
    return String(num).replace(/[^0-9.]/g, '');
  }

  static cpf(string) {
    return this.format(string, '000.000.000-00');
  }

  static cnpj(string) {
    return this.format(string, '00.000.000/0000-00');
  }

  static cep(string) {
    return this.format(string, '00000-000');
  }

}

module.exports = Conversion;
