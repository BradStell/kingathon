const express = require('express');
const jenkinsApi = require('./jenkins-api');
const app = express();

const port = process.env.PORT || 3333;

app.get('/', function (req, res) {
  jenkinsApi.start(req, res);
});

app.listen(port);