const { Country, Activity } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

//Bring the API info.
const getApiInfo = async () => {
  const response = await axios.get("https://restcountries.com/v3/all");

  const map = response.data.map((e) => {
    const country = {
      id: e.cca3,
      name: e.name.common,
      imgFlag: e.flags[1],
      continent: e.continents[0],
      capital: e.capital != null ? e.capital[0] : "No data",
      subregion: e.subregion,
      area: e.area,
      population: e.population,
    };
    return country;
  });


  //Load the Database.
  try {
    const countries = await Country.findAll();
    if (!countries.length) {
      await Country.bulkCreate(map);
    }
  } catch (error) {
    console.log(error);
  }
};


//Gets all countries.
const getCountries = async () => {
  try {
    const countries = await Country.findAll({
      include: [
        {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
          through: { attributes: [] },
        },
      ],
    });
    return countries;
  } catch (error) {
    console.log(error);
  }
};


// Gets the country by name.
const getCountryByName = async (name) => {
  try {
    if (!name) {
      const countries = await Country.findAll({
        include: [
          {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: { attributes: [] },
          },
        ],
      });

      if (!countries) {
        throw new Error("Country not found");
      }
    } else {
      const country = await Country.findAll({
        where: {
          name: { [Op.iLike]: "%" + name + "%" },
        },
        include: [
          {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: { attributes: [] },
          },
        ],
      });
      if (country) {
        return country;
      } else {
        throw new Error("Country not found");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getApiInfo, getCountries, getCountryByName };
