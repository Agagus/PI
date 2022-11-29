// aca tengo que usar el switch case para evaluar que action me esta llegando 
import { GET_ALL_COUNTRIES , GET_COUNTRY_DETAIL, GET_BY_CONTINENT, GET_ALPHABETICAL, GET_BY_ACTIVITY, GET_ACTIVITIES, GET_BY_POPULATION, DELETE_ACTIVITY } from '../actions/index.js'

const initialState = {
    countries: [],
    allCountries: [], //tiene todo
    allFromActivities: [],
    allFromAlpha: [],
    countryDetail: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ALL_COUNTRIES :
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
                allFromActivities: action.payload,
                allFromAlpha: action.payload,
            }

        case GET_COUNTRY_DETAIL :
            return {
                ...state,
                countryDetail : action.payload,
            }    

        case GET_BY_CONTINENT :
            const total = state.allCountries;
            const countriesContinent = action.payload === 'All' ? total : 
            total.filter(country => country.continent === action.payload)

            return {
                ...state,
                countries: countriesContinent,
            }

        case GET_ALPHABETICAL :
            const again = state.allFromAlpha;
            // const random = state.countries
            if(action.payload === 'random'){
                return {
                    ...state,
                    countries: state.countries,
                }
            }

            const alpha = action.payload === 'asc' ? again.sort((a, b) => a.name.localeCompare(b.name)) :
            again.sort((a, b) => b.name.localeCompare(a.name))
            
            return {
                ...state,
                countries: alpha,
            }


        case GET_BY_POPULATION :
            const total3 = state.countries;
            const orderPopulation = action.payload === '-' ? state.allCountries :
            action.payload === 'ascP' ?
            total3.sort((a, b) => a.population - b.population) :
            total3.sort((a, b) => b.population - a.population) ;
            
            return {
                ...state,
                countries: orderPopulation,
            }

        case GET_ACTIVITIES :
            return {
                ...state,
                activities: action.payload,
            }

        case GET_BY_ACTIVITY :
            const all = state.allFromActivities
            const activities = action.payload === 'All' ? all :
            all.filter(country => country.activities.name === action.payload);
    
            return {
                ...state,
                countries: activities,
            }

        case DELETE_ACTIVITY :
                
            return {
                ...state,
                activities
            }

            default : 
            return {...state} 
        


        }

        
    }
    
    export default rootReducer;
    