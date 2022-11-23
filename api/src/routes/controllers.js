const { Country, Activity, CountryActivity } = require('../db.js');
const { Op } = require("sequelize")


const getCountry = async (name) => {

    const countryDb = await Country.findAll({
        where: {
            name: { [Op.iLike]: `%${name}%` }
        },
       include: {
            model: Activity,
            through: { attributes: [] }
       }
    })

    if (countryDb.length) return countryDb;
    else {
        throw Error('Country not found')
    }
}

const countryById = async (id) => {

    const countryId = await Country.findOne({
        where: {
            id: { [Op.iLike]: `%${id}%` }
        },
        include: {
            model: Activity,
            // attributes: ["name"],
            through: { attributes: [] }
       }
        
    })

    if (countryId) return countryId;
    else {
        throw Error('Id not found')
    }
}


const postActivity = async (name, difficulty, duration, season, country) => {
    

    const newActivity = await Activity.create({
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season,
        })
    
    await newActivity.save();

    // const findCountry = await Country.findByPk(id)
    const findCountries = await Country.findAll({
        where:
            { name: country }
    })

//

    const addAct = await newActivity.addCountry(findCountries);
    

    return addAct;
}


module.exports = {
    getCountry,
    countryById,
    postActivity,
}