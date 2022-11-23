// aca tengo que usar el switch case para evaluar que action me esta llegando 
import { GET_ALL_COUNTRIES , GET_COUNTRY_DETAIL, GET_BY_CONTINENT, POST_ACTIVITY, CLEAN_PAGE, GET_ALPHABETICAL, GET_BY_ACTIVITY, GET_ACTIVITIES, GET_BY_POPULATION } from '../actions/index.js'

const initialState = {
    countries: [],
    allCountries: [], //tiene todo
    allFromActivities: [],
    nameActivities: [],
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
            const again = state.allCountries;
            const random = state.countries
            if(action.payload === 'random'){
                return {
                    ...state,
                    countries: random
                }
            }

            const alpha = action.payload === 'asc' ? again.sort((a, b) => a.name.localeCompare(b.name)) :
            again.sort((a, b) => b.name.localeCompare(a.name))
            
            return {
                ...state,
                countries: alpha,
            }
        // case GET_ALPHABETICAL :
        //     const total2 = state.allCountries;
        //     const order = action.payload === 'asc' ?
        //         total2.sort((a, b) => a.name.localeCompare(b.name)) :
        //         total2.sort((a, b) => b.name.localeCompare(a.name)) ;
                

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



            // const total = state.allCountries;
            // const countriesContinent = action.payload === 'All' ? total : 
            // total.filter(country => country.continent === action.payload)

            // return {
            //     ...state,
            //     countries: countriesContinent,
            // }


            default : 
            return {...state} 
        }



        
    }
    
    export default rootReducer;
    // case GET_ACTIVITIES :
    
    //     return {
    //         ...state,
    //         activities: action.payload,
    //         nameActivities: action.payload,
    //     }

    
    // case GET_BY_ACTIVITY :
    //     const allCountries = state.countries;
    //     const filterCountries = action.payload === 'All' ? allCountries.filter(country => country.activities.length > 0 ? 
    //         country.activities.find(({name}) => name === action.payload) : false ): false
    
    //     return {
        //         ...state,
        //         countries: filterCountries,
        //     }