const axios = require('axios');
const { Country } = require('../db.js');
//deberia traer mi database 'countries' e instanciar model

const getAllCountries = async () => {
    const dataApi = await axios.get('https://restcountries.com/v3/all');

    const dataCountries = dataApi.data.map(country => {
        return {
           
        }
    })


}

module.exports = {
    getAllCountries,
}