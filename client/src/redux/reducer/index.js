// aca tengo que usar el switch case para evaluar que action me esta llegando
import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_DETAIL,
  GET_BY_CONTINENT,
  GET_ALPHABETICAL,
  GET_BY_ACTIVITY,
  GET_ACTIVITIES,
  GET_BY_POPULATION,
  DELETE_ACTIVITY,
  CLEAN_COUNTRY_DETAIL,
} from '../actions/index.js';

const initialState = {
  countries: [],
  allCountries: [], //tiene todo
  countryDetail: [],
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
      };

    case GET_BY_CONTINENT:
      const total = state.allCountries;
      const countriesContinent =
        action.payload === 'All'
          ? total
          : total.filter((country) => country.continent === action.payload);

      return {
        ...state,
        countries: countriesContinent,
      };

    case GET_ALPHABETICAL:
      const again = [...state.countries];
      const alpha =
        action.payload === 'asc'
          ? again.sort((a, b) => a.name.localeCompare(b.name))
          : again.sort((a, b) => b.name.localeCompare(a.name));

      return {
        ...state,
        countries: alpha,
      };

    case GET_BY_POPULATION:
      const total3 = [...state.countries];
      const orderPopulation =
        action.payload === '-'
          ? state.allCountries
          : action.payload === 'ascP'
          ? total3.sort((a, b) => a.population - b.population)
          : total3.sort((a, b) => b.population - a.population);

      return {
        ...state,
        countries: orderPopulation,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case GET_BY_ACTIVITY:
      // const totalCountries = [...state.countries]; // activities: []
      // // let countriesAct = [];
      // const countriesAct = totalCountries.filter((country) => {
      //   if (action.payload === 'All') {
      //     return country.activities.length !== 0;
      //   } else return country.activities.name === action.payload;
      // });
      // console.log(action.payload);
      const all = state.allCountries;
      let allWhitAct = [];
      action.payload === 'All'
        ? (allWhitAct = all)
        : (allWhitAct = all.filter(
            (country) =>
              country.activities.length &&
              country.activities.some((act) => act.name === action.payload)
          ));

      console.log(allWhitAct, 'primer filter');

      return {
        ...state,
        countries: allWhitAct,
      };

    // console.log(all);
    // const orderActivities =
    //   action.payload === 'All'
    //     ? all.filter((country) => country.activities.length)
    //     : all.filter(
    //         (country) =>
    //           country.activities.length &&
    //           country.activities.name === action.payload
    //       );

    // console.log(orderActivities);
    // return {
    //   ...state,
    //   countries: orderActivities,
    // };

    case CLEAN_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: [],
      };

    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
