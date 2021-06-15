const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", (req, res) => {
  res.send("This is the root");
});

router.post("/airlineCompanies", controllers.createAirline);

router.get("/airlineCompanies", controllers.getAllAirlines);

router.get("/airlineCompanies/:id", controllers.getAirlineByID);

router.post("/airlineCompanies/:id", controllers.updateAirline);

router.delete("/airlineCompanies/:id", controllers.deleteAirline);

/************************/
router.get(
  "/airlineCompanies/:id/homeCountries",
  controllers.getAllAirlinesByCountry
);
/************************/

router.post("/homeCountries", controllers.createCountry);

router.get("/homeCountries", controllers.getAllCountries);

router.get("/homeCountries/:id", controllers.getCountryByID);

router.post("/homeCountries/:id", controllers.updateCountry);

router.delete("/homeCountries/:id", controllers.deleteCountry);

module.exports = router;
