var api = require('../api'),
    path = require('path');

const projetos = require('./projetos.json');

module.exports  = (app) => {

    app.route('/v1/signin')
        .post(api.create);

    app.route('/v1/timeline')
        .get(projetos.list);
};
