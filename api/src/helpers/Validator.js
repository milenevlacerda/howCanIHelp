const Joi = require('joi');

class Validator {
  static isAlunoValido(aluno) {
    const schema = Joi.object({
      matricula: Joi.number().integer().required(),
      nome: Joi.string().required(),
      curso: Joi.string().required(),
      created_at: Joi.string().required(),
    });

    if (!schema.validate(aluno).error) {
      return true;
    }

    return false;
  }

  static isMidiaModelValida(midia) {
    const schema = Joi.object({
      midia: Joi.object({
        id: Joi.number().integer().required(),
        titulo: Joi.string().required(),
        capa: Joi.string().required(),
        created_at: Joi.string().required(),
      }),
      filme: Joi.object({
        sinopse: Joi.string().allow(null).required(),
        diretor: Joi.string().allow(null).required(),
        duracao: Joi.string().allow(null).required(),
      }),
      livro: Joi.object({
        autor: Joi.string().allow(null).required(),
        editora: Joi.string().allow(null).required(),
      }),
    }).requiredKeys('midia', 'filme', 'livro');

    if (!schema.validate(midia).error) {
      return true;
    }

    return false;
  }

  static isMidiaValida(midia) {
    const schema = Joi.object({
      id: Joi.number().integer().required(),
      titulo: Joi.string().allow(null).required(),
      capa: Joi.string().allow(null).required(),
      created_at: Joi.string().required(),
      sinopse: Joi.string().allow(null),
      diretor: Joi.string().allow(null),
      duracao: Joi.string().allow(null),
      autor: Joi.string().allow(null),
      editora: Joi.string().allow(null),
    });

    if (!schema.validate(midia).error) {
      return true;
    }

    return false;
  }
}

module.exports = Validator;
