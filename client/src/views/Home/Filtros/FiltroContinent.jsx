import React ,{useEffect}from "react";
import { filterByContinent, getCountries } from "../../../redux/actions";
import { useDispatch } from "react-redux";

function FiltroContinent({ currentPage, setCurrentPage }) {
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getCountries());
    }, [dispatch]);


  function handleFilter(e) {
    const value = e.target.value;
    setCurrentPage(1);
    dispatch(filterByContinent(value));
  }

  return (
    <div>
      <select onChange={handleFilter}>
        <option selected disabled>
          Select one
        </option>
        <option value="All">All Continents</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default FiltroContinent;
