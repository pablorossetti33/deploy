const { Router } = require("express");
const {getAllCountries, getCountryById} = require("../controllers/getCountries")

const router = Router();


//Route to all Countries.
router.get("/", getAllCountries)

//Route to each Country by ID.
router.get("/:idPais", getCountryById)

module.exports = router;
