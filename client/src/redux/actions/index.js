import axios from 'axios';
//declarar las variables action types ----> const GET_USERS = 'GET_USERS';
//debo crear las actions
//utilizar dispatch, que va a devolver un obj con una prop type : 'nombre de la action', payload : {la:info}
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";



export const getAllCountries = () => {
    return async function(dispatch){

        try {
            const countries = await axios.get('http://localhost:3001/countries');
            return dispatch({ type: GET_ALL_COUNTRIES, payload: countries.data})
        } catch (error) {
            console.error(error);
        }
    }   
}

export const getCountryDetail = (id) => {
    return async function(dispatch){
        
        try {
            const country = await axios.get(`http://localhost:3001/countries/${id}`);
            return dispatch({ type: GET_COUNTRY_DETAIL, payload : country.data})    
        } catch (error) {
            console.error(error);
        }
    }
}
