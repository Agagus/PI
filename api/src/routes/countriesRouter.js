const express = require('express');

const countriesRouter = express.Router();
// const { getAllCountries } = require('./controllers');


countriesRouter.get('/', (req, res) => {
    res.send('Server ok');
})



module.exports = countriesRouter; 