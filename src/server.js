const express = require('express');
const path = require('path');

function allowCrossDomain(req, res, next) {
  'use strict';

  res.header('Access-Control-Allow-Origin', '*');
  next();
}

const app = express();
app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, 'assets')));

app.listen({
  port: 8008,
});
