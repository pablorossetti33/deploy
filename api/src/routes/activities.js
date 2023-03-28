const { Router } = require("express");
const { Activity, Country } = require("../db");

const router = Router();

//Route Post.
router.post("/", async (req, res, next) => {
  try {
    let { name, difficulty, duration, season, idCountry } = req.body;

    if (name && difficulty && duration && season && idCountry) {
      if (difficulty > 0 && difficulty < 6) {
        if (
          season === "Summer" ||
          season === "Autumn" ||
          season === "Winter" ||
          season === "Spring"
        ) {
          let searchId = await Country.findAll({
            where: {
              id: idCountry,
            },
          });

          if (!searchId[0]) {
            return res
              .status(409)
              .send("Please enter a valid country ID");
          } else {
            let newActivity = await Activity.create({
              name,
              difficulty,
              duration,
              season,
            });
            newActivity.addCountries(searchId);
            res.send(newActivity);
          }
        } else {
          return res
            .status(408)
            .send("Enter a valid season (summer, autumn, winter, spring)");
        }
      } else {
        return res
          .status(409)
          .send("Please enter a difficulty in numbers from 1 to 5.");
      }
    } else {
      res
        .status(410)
        .send({ Error: "Please fill in all fields to create the activity" });
    }
  } catch (err) {
    next(err);
  }
});

//Route Get.
router.get("/", async (req, res) => {
  try {
    const activity = await Activity.findAll();
    res.send(activity);
  } catch (e) {
    res.send(e);
  }
});


//Route Put
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const activities = req.body;

  try {
    let act = await Activity.update(activities, {
      where: {
        id: id,
      },
    });
    return res.json({ changed: true });
  } catch (error) {
    console.log(error);
  }
});

//Route Delete
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    let act = await Activity.destroy({
      where: {
        id: id,
      },
    });
    return res.json({ delete: true });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
