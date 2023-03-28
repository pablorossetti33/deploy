import React from "react";
import CountryDetail from "./CountryDetail/CountryDetail";
import Header from "../Header/Header";
import style from "./Detail.module.css";

const Detail = () => {
  return (
    <div>
      <Header />
      <div className={style.details_component}>
        <CountryDetail />
      </div>
    </div>
  );
};

export default Detail;
