const express = require('express');
const { Country, Activity } = require('../db');
const countriesRouter = express.Router();
const { getCountry, countryById } = require('./controllers');


countriesRouter.get('/', async (req, res) => {
    try {
        const { country } = req.query;

        if(country) return res.send(await getCountry(country))
        else {
            const allCountries = await Country.findAll({include: {
                model: Activity,
                attributes: ["name"],
                through: { attributes: [] }
              }});
            return res.send(allCountries);
        }
    } catch (error) {
        return res.status(404).json({error : error.message})
    }

})


countriesRouter.get('/:idCountry', async (req, res) => {
    try {
        const { idCountry } = req.params;

        const countryId = await countryById(idCountry)
        return res.send(countryId)

    } catch (error) {
        return res.status(404).json({ error : error.message })
    }

})



module.exports = countriesRouter; 