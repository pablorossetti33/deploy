import React, { useState } from "react";
import CardsContainer from "./CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ButtonCreateActivity from "./ButtonCreateActivity/ButtonCreateActivity";
import Filtros from "./Filtros/Filtros";
import style from "./Home.module.css";
import { orderByName, orderByPopulation } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  function handleChange(e) {
    const value = e.target.value;
    if (value === "name_asc" || value === "name_des") {
      dispatch(orderByName(value));
    }
    if (value === "popu_asc" || value === "popu_des") {
      dispatch(orderByPopulation(value));
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  return (
    <body>
      <div className={style.homeContainer}>
        <Header />
        <div className={style.home}>
          <div>
            <div className={style.home_options}>
              <ButtonCreateActivity />
              <div className={style.div_filtro_ordernamineto}>
                <Filtros
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
                <div className={style.div_ordernamiento}>
                  <span className={style.ordenar_text}>Ordernar por :</span>
                  <select
                    className={style.select_ordernamiento}
                    onChange={handleChange}
                  >
                    <option className={style.option_name} value="name_asc">
                      Nombre (asc)
                    </option>
                    <option className={style.option_name} value="name_des">
                      Nombre (des)
                    </option>
                    <option className={style.option_name} value="popu_asc">
                      Population (asc)
                    </option>
                    <option className={style.option_name} value="popu_des">
                      Population (des)
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <CardsContainer
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              countriesPerPage={countriesPerPage}
              indexOfFirstCountry={indexOfFirstCountry}
              indexOfLastCountry={indexOfLastCountry}
            />
          </div>
        </div>
        <Footer />
      </div>
    </body>
  );
};

export default Home;
