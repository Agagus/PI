const express = require('express');
const { Country } = require('../db')
const countriesRouter = express.Router({caseSensitive: false});
const { getCountry } = require('./controllers');


// countriesRouter.get('/', async (req, res) => {
//     const names = await Country.findAll()

//     return res.send(names);
// })

countriesRouter.get('/', async (req, res) => {
    const { country } = req.query;

    if (country) {

        try {
            return res.send(getCountry(country))
        } catch (error) {
            return res.status(404).send({ error: error.message });
        }
    }

    else {
        const names = await Country.findAll()

        return res.send(names);
    }
})



module.exports = countriesRouter; 