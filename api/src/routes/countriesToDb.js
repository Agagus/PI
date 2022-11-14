const axios = require('axios');
const { Country, CountryActivity} = require('../db.js');

//deberia traer mi database 'countries' e instanciar model


const createCountries = async () => {
    const dataApi = await axios.get('https://restcountries.com/v3/all');

    const dataCountries = dataApi.data.map(country => {
        return {
            id: country['cca3'],
            name: country['name']['common'],
            flags: country['flags'][1],
            continent: country['region'], //continents,
            capital: country['capital'] ? country['capital'][0] : 'data not found',
            subregion: country['subregion'] ? country['subregion'] : 'data not found',
            area: country['area'],
            population: country['population'],
            
        }
    })

    return dataCountries;
}


const countriesToDb = async () => {
    const countries = await createCountries();

    countries.forEach(country => {
        Country.findOrCreate({
            where: {
                id: country.id,
                name: country.name,
                flags: country.flags,
                continent: country.continent, //continents,
                capital: country.capital,
                subregion: country.subregion,
                area: country.area,
                population: country.population,
                // activities: await CountryActivity.findByPk(country.id),
            }
        })
    })
}

module.exports = { countriesToDb }