const axios = require('axios');
const { Country } = require('../db.js');
//deberia traer mi database 'countries' e instanciar model

const getAllCountries = async () => {
    const dataApi = await axios.get('https://restcountries.com/v3/all');

    const dataCountries = dataApi.data.map(country => {
        return {
            id: country.cca3,
            name: country.name.common,
            continent: country.region, //continents,
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population,
        }
    })

    
}

module.exports = {
    getAllCountries,
}