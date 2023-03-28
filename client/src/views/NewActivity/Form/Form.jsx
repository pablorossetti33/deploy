import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activityPost, getCountries } from "../../../redux/actions";
import { useHistory } from "react-router-dom";
import styles from "./Form.module.css";

function validar(input) {
  //Validations.
  let errors = {};
  if (!input.name) {
    errors.name = "You must give it a name.";
  } else if (!/[A-Z]+$/i.test(input.name)) {
    errors.name = "Can only contain letters";
  } else if (parseInt(input.name.length) >= 25) {
    errors.name = "Must contain less than 25 characters";
  }

  //Difficulty:
  if (!input.difficulty) {
    errors.difficulty = "Difficulty required.";
  } else if (!/^[0-9]+$/.test(input.difficulty)) {
    errors.difficulty = "Can only contain numbers";
  } else if (!/^(?!$)(?:[0-9]{1,2}|5)$/gm.test(input.difficulty)) {
    errors.difficulty = "The difficulty must be between 0 and 5";
  }

  //Season
  if (!input.season) {
    errors.season = "Season required";
  }

  return errors;
}

//Form
function Form() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const listCountries = useSelector((state) => state.countries);

  const [errors, setErrors] = useState({}); // este estado local es para, las validaciones(del formulario controlado)
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "00:00",
    season: "",
    idCountry: [],
  });
  // console.log(input);
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validar({
        ...input,
        [e.target.name]: e.target.value, // me copio todo lo que venga del formulario , en el caso de que en alguno
      })
    ); // no cumpla con las validaciones, se va a poner un texto advirtiendo
  }

  //"handleSelect" guarda en un [] todo lo que seleccione ---> COUNTRIES
  function handleSelect(e) {
    setInput((input) => {
      if (!input.idCountry.includes(e.target.value)) {
        //verificamos si el valor de e.target.value (el valor seleccionado) NO está incluido en el arreglo idCountry del estado anterior input.
        return {
          // si NO esta, se crea un nuevo obj que copia el estado anterior (input) y agrega el valor de e.target.value al arreglo idCountry
          ...input,
          idCountry: [...input.idCountry, e.target.value],
        };
      } else {
        // Si e.target.value SI está incluido en el [] idCountry, mostranos un alert y se devuelve un nuevo obj que copia todas las propiedades del estado anterior (input) y mantiene el arreglo idCountry sin cambios.
        alert("Cannot include a duplicate country");
        return {
          ...input,
          idCountry: [...input.idCountry],
        };
      }
    });
  }

  //Funcion HandleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(activityPost(input));
    alert("Congratulations you created a new activity!");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      idCountry: [],
    });
    history.push("/home");
  }
  function handleDelete(e) {
    setInput({
      ...input,
      idCountry: input.idCountry.filter((id) => id !== e),
    }); //este es para borrar algun id que haya elegido, va a creat un nuevo array con todos los que no sean
  } //    el elemento que le hice click

  return (
    <div className={styles.bkg}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Create new Activity</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className={styles.form}
        >
          <div>
            <label>Name </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>

          <div>
            <label>Difficulty </label>
            <select
              type="text"
              name="difficulty"
              onChange={handleChange}
              required
            >
              <option value=""> Difficulty </option>
              {[1, 2, 3, 4, 5].map((e) => (
                <option value={e.difficulty}> {e} </option>
              ))}
            </select>
            {errors.difficulty && (
              <p className={styles.error}>{errors.difficulty}</p>
            )}
          </div>

          <div>
            <label>Duration </label>
            <select
              type="text"
              name="duration"
              onChange={handleChange}
              required
            >
              <option value="00:00"> --- </option>
              <option value="01:00"> 01:00 </option>
              <option value="02:00"> 02:00 </option>
              <option value="03:00"> 03:00 </option>
              <option value="04:00"> 04:00 </option>
              <option value="05:00"> 05:00 </option>
              <option value="06:00"> 06:00 </option>
              <option value="07:00"> 07:00 </option>
              <option value="08:00"> 08:00 </option>
              <option value="09:00"> 09:00 </option>
              <option value="10:00"> 10:00 </option>
              <option value="11:00"> 11:00 </option>
              <option value="12:00"> 12:00 </option>
              <option value="13:00"> 13:00 </option>
              <option value="14:00"> 14:00 </option>
              <option value="15:00"> 15:00 </option>
              <option value="16:00"> 16:00 </option>
              <option value="17:00"> 17:00 </option>
              <option value="18:00"> 18:00 </option>
              <option value="19:00"> 19:00 </option>
              <option value="20:00"> 20:00 </option>
              <option value="21:00"> 21:00 </option>
              <option value="22:00"> 22:00 </option>
              <option value="23:00"> 23:00 </option>
              <option value="24:00"> 24:00 </option>
            </select>
            {errors.duration && (
              <p className={styles.error}>{errors.duration}</p>
            )}
          </div>

          <div>
            <label>Season </label>
            <select type="text" name="season" onChange={handleChange} required>
              <option value=""> Season </option>
              {["Winter", "Spring", "Autumn", "Summer"].map((e) => (
                <option value={e.season}> {e} </option>
              ))}
            </select>
            {errors.season && <p className={styles.error}>{errors.season}</p>}
          </div>

          <select onChange={(e) => handleSelect(e)} className={styles.select}>
            {listCountries?.map((t) => {
              return <option value={t.id}> {t.name} </option>;
            })}
          </select>
          {errors.hasOwnProperty("name") ||
          errors.hasOwnProperty("difficulty") ||
          errors.hasOwnProperty("season")  ? (
            <p className={styles.adv}>
              {" "}
              Please complete all the inputs to create your Activity
            </p>
          ) : (
            <button type="submit" className={styles.correct}>
              {" "}
              Create Activity
            </button>
          )}
        </form>

        {input.idCountry.map((e) => {
          return (
            <div>
              <h5 className={styles.types}>{e}</h5>
              <button className={styles.btnx} onClick={() => handleDelete(e)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Form;
