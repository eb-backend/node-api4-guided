const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.use('/api', apiRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: `Welcome ${process.env.COHORT}`, fact:process.env.FUN_FACT || "I have no fun fact"})
});

module.exports = server;
