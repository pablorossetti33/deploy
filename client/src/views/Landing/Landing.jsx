import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Landing.module.css";
import countries from "../../images/countries-landing.png";
import arrow from "../../images/acc_arrow.png"



const Landing = () => {
  return (
    <div>
      <body>
        {/* --- header ---*/}
        <header>
          <nav>
            <span className={styles.logo}>HENRY | COUNTRIES</span>
            <Link to="/home" className={styles.acceder}>
              Start Now
            </Link>
          </nav>
        </header>
        {/* --- main --- */}
        <main>
          <div className={styles.main_left}>
            <h1 className={styles.titulo}>
            Travel the World with{" "}
              <span className={styles.titulo_countries}>Henry Countries</span>
            </h1>
            <p className={styles.sub_titulo}>
            Discover the most amazing Countries easily with our app.
            </p>
            <Link to="/home" className={styles.acceder_grande}>
              Start Now
              <img className={styles.arrow} src={arrow} alt="arrow" />
            </Link>
          </div>

          <div className={styles.main_right}>
            <div className={styles.div_hero}>
              <img className={styles.hero} src={countries} alt="hero" />

            </div>
          </div>
        </main>
      </body>
    </div>
  )
}



export default Landing;