import axios from 'axios';
//declarar las variables action types ----> const GET_USERS = 'GET_USERS';
//debo crear las actions
//utilizar dispatch, que va a devolver un obj con una prop type : 'nombre de la action', payload : {la:info}
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const GET_BY_CONTINENT = "GET_BY_CONTINEN";
// export const POST_ACTIVITY = "POST_ACTIVITY";
export const CLEAN_PAGE = "CLEAN_PAGE";
export const GET_ALPHABETICAL = "GET_ALPHABETICAL";
export const GET_BY_ACTIVITY = "GET_BY_ACTIVITY";
export const GET_BY_POPULATION = "GET_BY_POPULATION";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";


export const getAllCountries = (name) => {
    return async function(dispatch){
        const query = name ? `?country=${name.toLowerCase()}` : '/'

        try {
            let countries = await axios.get(`http://localhost:3001/countries${query}`);
            countries = countries.data.sort((a, b) => a.name.localeCompare(b.name))
            return dispatch({ type: GET_ALL_COUNTRIES, payload: countries })
        } catch (error) {
            alert('Country not found')
            // console.error(error);
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

export const getByActivity = (activity) => {
    return { type: GET_BY_ACTIVITY, payload: activity }
}

export const getByContinent = (continent) => {
    return { type: GET_BY_CONTINENT, payload: continent }
    
}


export const getAlphabetical = (order) => {
    return { type: GET_ALPHABETICAL, payload: order}

}

export const getByPopulation = (order) => {
    return { type: GET_BY_POPULATION, payload: order }
}

// export const postActivity = (input) => {
//     return async function(dispatch){

//         try {
//             const activity = await axios.post('http://localhost:3001/activities', input)
//             return dispatch ({type: POST_ACTIVITY, payload : activity.data})
//         } catch (error) {
//             console.error(error);
//         }
//     }
// }

export const getActivities = () => {
    return async function(dispatch){

        try {
            const activities = await axios.get('http://localhost:3001/activities')
            return dispatch({type: GET_ACTIVITIES, payload: activities.data})
        } catch (error) {
            console.error(error)
        }
    }
}

export const deleteActivity = (id) => {
    return async function(dispatch){
        try {
            const delAct= await axios.delete(`http://localhost:3001/activities/${id}`)
            return dispatch({type: DELETE_ACTIVITY, payload: delAct.data})
            
        } catch (error) {
            console.error(error)
        }
    }
}
