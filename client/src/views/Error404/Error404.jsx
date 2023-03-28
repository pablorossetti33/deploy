import React from 'react';
import {Link} from "react-router-dom";
import image404 from "../../images/error-404.jpg";
import style from "./Error404.module.css"


const Error404 = () => {
  return (
    <div  className={style.containerError}>
        <img
        className={style.img404}
        src={image404}
        title="Not found:("
        alt="Not Found"
      />
       <Link to="/home">
          <button className={style.btn}>Back to the Home</button>
        </Link>
    </div>
  )
}

export default Error404;