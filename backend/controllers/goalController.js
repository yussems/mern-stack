const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalmodal");

//@desc getGoals
//@route GET /api/goals
//acces private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});
const setGoals = asyncHandler(async (req, res) => {
  const goal = req.body.text;
  if (!goal) {
    res.status(400);
    throw new Error("Please Add Text Field");
  }
  const createGoal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(createGoal);
});
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(404);
      throw new Error("Goal not found");
    }

    await goal.remove()
  res.status(200).json({message:`${req.params.id} was deleted`});
});

module.exports = { getGoals, deleteGoals, updateGoals, setGoals };
