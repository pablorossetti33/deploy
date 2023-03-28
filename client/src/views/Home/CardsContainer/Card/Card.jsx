import React from "react";
import style from "./Card.module.css"

const Card = ({imgFlag, name, continent}) => {
  return (
    <div className={style.card}>
      <div  className={style.image}>
        <img src={imgFlag} />
      </div>
      <div className={style.nameCountry}>
        <span  >{name}</span>
      </div>

      <div className={style.nameContinent}>
        <p>{continent}</p>
      </div>
    </div>
  );
};

export default Card;
