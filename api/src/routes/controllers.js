const { Country } = require('../db.js');
const { Op } = require("sequelize")


const getCountry = async (name) => {

    const allDb = await Country.findAll({
        where : {
            name : { [Op.iLike]: `%${name}%` }
        }
    });

    // console.log(allDb); //[ country {}]

    // const checkCountries = allDb.filter(country => {
    //     country['name'].toLowerCase().includes(name)
    // })

    console.log(allDb);

    if(allDb) return allDb
    else {
        throw Error('Country not found')
    }






    // const allCountries = await Country.findAll(); //[ con todos lo countries ]
    // // console.log(allCountries[4])

    // const checkName = name.toLowerCase().replace(/\s+/g, '')
    // // .replaceAll('%20', ' ')
    // // console.log(checkName)

    // // const checkCountries = []

    // // for (i=0; i< allCountries; i++){
    // //     if(allCountries[i]['name'].includes(checkName)){
    // //         checkCountries.push(allCountries[i])
    // //         console.log(checkCountries)
    // //     }
    // // }
    
    // const checkCountries = allCountries.filter(country => 
    //     country['name'].toLowerCase().includes(checkName)
    // )
    // console.log(checkCountries)

    // if (checkCountries.length) return checkCountries;
    // else throw Error('Country not found');

}


module.exports = {
    getCountry,
}