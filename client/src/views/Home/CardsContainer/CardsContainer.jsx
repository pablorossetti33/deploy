import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../../redux/actions";
import Card from "./Card/Card";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import style from "./CardsContainer.module.css";
import Pagination from "../Pagination/Pagination";

const CardsContainer = ({
  currentPage,
  setCurrentPage,
  countriesPerPage,
  indexOfFirstCountry,
  indexOfLastCountry,
}) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  //Se monta el componente y dispacha la action.
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const CurrentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);
  const paginate = (page) => {
    setCurrentPage(page);
  };

  function Cards() {
    return CurrentCountries.map((country, i) => (
      <Link
        to={`/detail/${country.id}`}
        key={i}
        className={style.linkContainer}
      >
        <Card
          name={country.name}
          imgFlag={country.imgFlag}
          continent={country.continent}
        />
      </Link>
    ));
  }

  return (
    <div>
      <div className={style.AllCards}>
        {countries.length !== 0  ? Cards() : <Loader />}
      </div>
      <Pagination
        countriesPerPage={countriesPerPage}
        totalPosts={countries.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CardsContainer;
