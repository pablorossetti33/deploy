import React from 'react';
import Header from "../Header/Header";
import Form from "./Form/Form";
import style from "./NewActivity.module.css";

const NewActivity = () => {
  return (
    <div>
       <Header />
    <div className={style.new_activity}>
     
      <Form />
    </div>
    </div>
  )
}

export default NewActivity;