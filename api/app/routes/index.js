var api = require('../api'),
    path = require('path');

module.exports  = function(app) {

    app.route('/v1/signin')
        .post(api.create);

    app.route('/v1/home')
        .get(api.list);
};
