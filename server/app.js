const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const path = require('path');

const publicPath = path.resolve(__dirname, 'src');

// express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static asset location
app.use(express.static(publicPath));
app.use('/api/', apiRouter);
app.use('*', (req, res) => res.sendFile(publicPath + '/index.html'));

module.exports = app;
