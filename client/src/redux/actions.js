import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETAILS = "GET_DETAILS";
export const GET_BY_NAME = "GET_BY_NAME";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const ACTIVITY_POST = "ACTIVITY_POST";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";



export const getCountries = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get("http://localhost:3001/countries");
      const countries = apiData.data;
      dispatch({ type: GET_COUNTRIES, payload: countries });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getActivities = () => {
  return function (dispatch) {
    return axios
      .get("http://localhost:3001/activities")
      .then((apiData) => {
        const activities = apiData.data;
        dispatch({ type: GET_ACTIVITIES, payload: activities });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      const apiDataId = await fetch(`http://localhost:3001/countries/${id}`);
      const details = await apiDataId.json();
      dispatch({ type: GET_DETAILS, payload: details });
    } catch (error) {
      console.log(error);
    }
  };
};


export const getCountriesByName = (name) => {
  return async function (dispatch) {
    try {
      const apiDataByName = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );
      const byName = apiDataByName.data;
      dispatch({
        type: GET_BY_NAME,
        payload: byName,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const activityPost = (payload) => {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/activities", payload);
      alert("Activity created successfully");
      return dispatch({
        type: ACTIVITY_POST,
      });
    } catch (error) {
      console.log(error);
      alert("Activity not created");
    }
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const orderByPopulation = (payload) => {
  return {
    type: ORDER_BY_POPULATION,
    payload,
  };
};

export const filterByContinent = (payload) => {
  return {
      type: FILTER_BY_CONTINENT,
      payload
  }
}

export const filterByActivities = (payload) => {
  return {
      type: FILTER_BY_ACTIVITY,
      payload
  }
}


