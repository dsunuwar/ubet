/**
 * This module exports all the api end-points in one convenient location
 */
const express = require('express');
const nextRaceRouter = require('./next-race');

const apiRouter = express.Router();

// TODO: move to middleware folder
apiRouter.use((req, res, next) => {
    res.setHeader('Surrogate-Control', 'no-store');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});

apiRouter.use('/next-race', nextRaceRouter);

module.exports = apiRouter;
