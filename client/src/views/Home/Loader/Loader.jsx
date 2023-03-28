import React from "react";
import style from "./Loader.module.css";

class Loader extends React.Component {
  render() {
    return (
      <div className={style.loader}>
        <span>No hay <span className={style.activity}>actividades</span></span>
      </div>
    );
  }
}

export default Loader;