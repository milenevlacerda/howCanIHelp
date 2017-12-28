/* .env lib */
require('dotenv').config();

/* Dependencies */
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const i18n = require('./config/i18n');

/* Routes */
const userRoutes = require('./routes/user');
const ngoRoutes = require('./routes/ngo');
const loginRoutes = require('./routes/login');
const projectRoutes = require('./routes/project');
const investmentRoutes = require('./routes/investment');
const accountRoutes = require('./routes/account');

/* Express initialization */
const app = express();

/* Logger */
const LoggerConfig = require('./config/LoggerConfig');

/* Express utilites */
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(i18n.init);
app.use(bodyParser.json({
  limit: process.env.BODY_LIMIT,
}));

/* Log express request and response */
LoggerConfig.expressRequest(app);

/* Status endpoint */
app.get('/', (req, res) => {
  res.send('ok');
});

/* Instatiate routes */
app.use('/user', userRoutes);
app.use('/login', loginRoutes);
app.use('/ngo', ngoRoutes);
app.use('/project', projectRoutes);
app.use('/investment', investmentRoutes);
app.use('/account', accountRoutes);

/* Log errors */
LoggerConfig.expressError(app);

app.all('*', (req, res) => {
  res.status(404).send({ success: false, code: '404' });
});

LoggerConfig.init();

module.exports = app;
