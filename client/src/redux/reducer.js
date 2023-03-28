import {
  GET_COUNTRIES,
  GET_DETAILS,
  GET_BY_NAME,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
  FILTER_BY_CONTINENT,
  ACTIVITY_POST,
  GET_ACTIVITIES,
  FILTER_BY_ACTIVITY,

} from "./actions";

const initialState = {
  countries: [],
  activities: [],
  details: {},
  countriesHome: [],
  allCountriesFilter: [],
  filterActivity:'All',
  filterContinent:'All',
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
        countriesHome: payload,
        allCountriesFilter: payload,
      };

      case GET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
    
      };

      case ACTIVITY_POST:
      return {
        ...state,
      };

    case GET_DETAILS:
      return { ...state, details: payload };

    case GET_BY_NAME:
      return {
        ...state,
        countriesHome: payload,
      };

    case FILTER_BY_CONTINENT:
      
      const allCountries = state.allCountriesFilter;
      let filtro =
        payload === "All"
          ? allCountries
          : allCountries.filter((e) => e.continent === payload);
          
         
         if(state.filterActivity!='All'){
          filtro = filtro.filter((e) => e.activities.find(a => a.name === state.filterActivity )  );
         }
        
      return {
        ...state,
        countries: filtro,
        filterContinent: payload,
      };


     case FILTER_BY_ACTIVITY:
      
      let countriesWithActivity = state.allCountriesFilter;

      if(state.filterContinent!=='All'){
        // console.log(state.filterContinent)
        countriesWithActivity= countriesWithActivity.filter(e=>e.continent===state.filterContinent)
        
      }
    
      const activity =
        payload === "All"
          ? countriesWithActivity
          : countriesWithActivity.filter((e) => e.activities.find(a => a.name === payload )  );
      return {
        ...state,
        countries: activity,
        filterActivity:payload,
      };

      

    case ORDER_BY_NAME:
      const orderByName =
        payload === "name_asc"
          ? state.countries.slice().sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.countries.slice().sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: orderByName,
      };

    case ORDER_BY_POPULATION:
      const orderPopulation =
        payload === "popu_asc"
          ? state.countries.slice().sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            })
          : state.countries.slice().sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: orderPopulation,
      };

    default:
      return { ...state };
  }
};
export default rootReducer;
