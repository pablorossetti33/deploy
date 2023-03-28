import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../../redux/actions";
import style from "./CountryDetail.module.css";

const CountryDetail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const countryDetail = useSelector((state) => state.details);

  return (
    <div className={style.countryDetail}>
      <div className={style.left}>
        <div className={style.profile}>
          <div className={style.div_country_profile}>
            <img
              className={style.image_country_profile}
              src={countryDetail.imgFlag}
              alt="country"
            />
          </div>
          <div className={style.div_country_name}>
            <h2 className={style.name_country}>{countryDetail.name}</h2>
            <span className={style.sobre_country}>DETAILS</span>
          </div>
        </div>

        <div className={style.table_container}>
          <table>
            <tr>
              <th className={style.encabezado_tabla}>CARACTERISTICAS</th>
            </tr>
            <tr>
              <td className={style.table_caracteristicas}>CONTINENT</td>
              <td className={style.table_datos}>{countryDetail.continent}</td>
            </tr>
            <tr>
              <td className={style.table_caracteristicas}>CAPITAL</td>
              <td className={style.table_datos}>{countryDetail.capital}</td>
            </tr>
            <tr>
              <td className={style.table_caracteristicas}>SUB-REGION</td>
              <td className={style.table_datos}>{countryDetail?.subregion}</td>
            </tr>
            <tr>
              <td className={style.table_caracteristicas}>AREA</td>
              <td className={style.table_datos}>
                {countryDetail?.area / 1000} km²
              </td>
            </tr>
            <tr>
              <td className={style.table_caracteristicas}>POPULATION</td>
              <td className={style.table_datos}>{countryDetail.population}</td>
            </tr>
          </table>
        </div>
      </div>

      <div className={style.table_container}>
        <span className={style.table_caracteristicas}>ACTIVITIES</span>

        {countryDetail.activities ? (
          countryDetail.activities.map((activity) => {
            return (
              <div key={activity.id}  className={style.table_datos}>
                <p>
                  Name: <span>{activity.name}</span>
                </p>
                <p>
                  Difficulty: <span>{activity.difficulty}</span>
                </p>
                <p>
                  Duration: <span>{activity.duration}</span>
                </p>
                <p>
                  Season: <span>{activity.season}</span>
                </p>
              </div>
            );
          })
        ) : (
          <>
            <p>No activities</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CountryDetail;
