import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesByName } from "../../../redux/actions";
import search_icon from "../../../images/search-icon.png";
import style from "./SearchBar.module.css"
import { Link } from "react-router-dom";



const SearchBar = () => {
  const dispatch = useDispatch();

  const [nameCountry, setNameCountry] = useState("");

  const countriesHome = useSelector((state) => state.countriesHome);

  function handleChange(e) {
    setNameCountry(e.target.value);
    if (nameCountry && nameCountry) {
      dispatch(getCountriesByName(nameCountry));
    }
  }

  function handleClick() {
    setNameCountry("");
  }

  return (
    <div className={style.searchBar_Container}>
      <div className={style.divInput_SearchBar}>
        <div className={style.div_button_search}>
          <img className={style.searchIcon} src={search_icon} alt="serach" />
        </div>
        <input
          className={style.searchBar}
          type="text"
          placeholder="Buscar"
          onChange={handleChange}
          value={nameCountry}
        />
        <button
          className={
            nameCountry.length > 0 ? style.cleaner.active : style.cleaner
          }
          onClick={handleClick}
        >
          x
        </button>
      </div>

      <div
        className={
          nameCountry.length !== 0
            ? style.divSearchBar_Results.active
            : style.divSearchBar_Results
        }
      >
        <div className={style.div_nameResult}>
          {nameCountry &&
            countriesHome.slice(0, 10).map((d, i) => {
              return (
                <div>
                  <Link
                    className={style.results}
                    to={`/detail/${d.id}`}
                    key={i}
                  >
                    {d.name}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
