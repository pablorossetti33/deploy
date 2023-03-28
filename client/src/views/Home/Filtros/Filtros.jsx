import React, { useState } from "react";
import icon from "../../../images/icon_filtro.svg"
import FiltroContinent from "./FiltroContinent";
import FiltroActivities from "./FiltroActivities";
import style from "./Filtros.module.css";


function Filtros({ currentPage, setCurrentPage }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className={style.filtro}>
      <div className={style.div_button_filter}>
        <button className={style.button_filter} onClick={handleClick}>
          <img className={style.icon_filtro} src={icon} alt="filter" />
          Filtros
        </button>
      </div>
      {open && (
        <div className={style.div_filtros_relative}>
          <div className={style.div_filtros}>
            <div className={style.div_fil}>
              <span className={style.filtro_name}>All Activities</span>
              <FiltroActivities
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
            <div className={style.div_fil}>
              <span className={style.filtro_name}>All Continents</span>
              <FiltroContinent
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
           
          </div>
        </div>
      )}
    </div>
  );
}

export default Filtros;