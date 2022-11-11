const express = require('express');
const { Country } = require('../db')
const countriesRouter = express.Router();
const { getCountry } = require('./controllers');


countriesRouter.get('/', async (req, res) => {
    try {
        const { country } = req.query;

        if(country) return res.send(await getCountry(country))
        else {
            const allCountries = await Country.findAll();
            return res.send(allCountries);
        }
    } catch (error) {
        return res.status(404).json({error : error.message})
    }



    // try {

    //     const { country } = req.query;

    //     if (!country) {
            
    //         const names = await Country.findAll();
    
    //         return res.send(names);
    //     }
        
    //     else { 
    //         return res.send(await getCountry(country));
    //     }
    // } catch (error) {
    //     return res.status(404).send({error : error.message}); //
    // }
})


// countriesRouter.get('/')


module.exports = countriesRouter; 