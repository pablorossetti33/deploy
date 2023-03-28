import React from "react";
import { Link } from "react-router-dom";
import style from "./ButtonCreateActivity.module.css"
import activity from "../../../images/activity-button.png"

function ButtonCreateRecipe() {
  return (
    <Link to="/create" className={style.button_crear_country}>
      <p className={style.text_button}>
        Crear nueva <span className={style.text_button_naranja}>actividad</span>
      </p>
      <img
        className={style.country_button_create}
        src={activity}
        alt="create activity"
      />
    </Link>
  );
}

export default ButtonCreateRecipe;