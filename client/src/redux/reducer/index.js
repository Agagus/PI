// aca tengo que usar el switch case para evaluar que action me esta llegando 
import { GET_ALL_COUNTRIES , GET_COUNTRY_DETAIL, GET_BY_CONTINENT, POST_ACTIVITY } from '../actions/index.js'

const initialState = {
    countries: [],
    countriesContinent: [],
    countryDetail: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ALL_COUNTRIES :
            return {
                ...state,
                countries: action.payload
            }

        case GET_COUNTRY_DETAIL :
            return {
                ...state,
                countryDetail : action.payload,
            }    

        case GET_BY_CONTINENT :
            return {
                ...state,
                countriesContinent: action.payload,
            }

        default : 
            return {...state} 
    }

}

export default rootReducer;