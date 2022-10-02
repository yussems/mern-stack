const asyncHandler = require('express-async-handler')

//@desc getGoals
//@route GET /api/goals
//acces private
const getGoals =asyncHandler(async (req,res) => {
    res.status(200).json({message:'Birds home page'})
})
const setGoals = asyncHandler(async (req,res) => {

    const goal = req.body.text
    if(!goal) {
        res.status(400)
        throw new Error('Please Add Text Field')
    }
    res.status(200).json({message:goal})
})
const updateGoals =asyncHandler(async (req,res) => {
    res.status(200).json({message:`${req.params.id} update`})
})
const deleteGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message:`${req.params.id} delete`})
})

module.exports = {getGoals,deleteGoals,updateGoals,setGoals}