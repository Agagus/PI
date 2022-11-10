

const getCountry = async (name) => {
    //split(' '), join(''), tolowercase
    //Hong%20Kong 
    const query = name.replace('%20', ' ')

    const country = await Country.findAll({
        where: { name: query }
        })
    if(country.length) return country;
    else throw Error('Country not found');
}





module.exports = {
    getCountry,
}