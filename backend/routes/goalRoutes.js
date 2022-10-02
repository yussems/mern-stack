const express = require("express");
const {
  getGoals,
  updateGoals,
  setGoals,
  deleteGoals,
} = require("../controllers/goalController");
const router = express.Router();

router.route("/").get(getGoals).post(setGoals);

router.route("/:id").put(updateGoals).delete(deleteGoals);



module.exports = router;
