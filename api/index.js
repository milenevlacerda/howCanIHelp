const app = require('./src/app');
const Logger = require('./src/helpers/Logger');

/* Startup message */
app.listen(process.env.PORT, () => {
  Logger.info(`Server started on port ${process.env.PORT}`);
});
