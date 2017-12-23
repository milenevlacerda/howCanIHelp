const crypto = require('crypto');

class Token {
  static encrypt(text) {
    const toBeEncrypted = JSON.stringify({
      text,
      timestam: Date.now(),
    });

    const cipher = crypto.createCipher('aes-256-cbc', process.env.SECRET);
    let crypted = cipher.update(toBeEncrypted, 'utf-8', 'hex');
    crypted += cipher.final('hex');

    return Buffer.from(crypted).toString('base64');
  }

  static decrypt(buffer) {
    const encrypted = Buffer.from(buffer, 'base64').toString('ascii');

    const decipher = crypto.createDecipher('aes-256-cbc', process.env.SECRET);
    let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');

    return JSON.parse(decrypted).text;
  }
}

module.exports = Token;
