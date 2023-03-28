const { getCountries, getCountryByName } = require("../utils/countries.utils");
const { Country, Activity } = require("../db");


// Controller that gets all countries.
const getAllCountries = async (req, res) => {
  try {
    if (req.query.name) {
      const countries = await getCountryByName(req.query.name);
      res.status(200).json(countries);
    } else {
      const countries = await getCountries();
      res.status(200).json(countries);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

//Controller getting country by ID.
const getCountryById = async (req, res) => {
  const idPais = req.params.idPais;

  try {
    const country = await Country.findOne({
      where: {
        id: idPais.toUpperCase(),
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
      return res.status(200).json(country);
    } else {
      return res.status(400).send("Country not found");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllCountries, getCountryById };
