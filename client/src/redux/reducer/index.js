// aca tengo que usar el switch case para evaluar que action me esta llegando 
import { GET_ALL_COUNTRIES , GET_COUNTRY_DETAIL } from '../actions/index.js'

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

        default : 
            return {...state} 
    }

}

export default rootReducer;