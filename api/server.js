const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

/* GET /testes */
const projetos = require('./projetos.json');

app.get('/projetos', (req, res) => {
  res.json(projetos);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});