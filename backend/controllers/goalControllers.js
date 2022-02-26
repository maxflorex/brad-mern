const asyncHandler = require('express-async-handler')

// @Desc Get Goals
// @Route GET /api/goals
// @Access Private

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals' })
})
// @Desc Set Goals
// @Route POST /api/goals
// @Access Private

const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'Set goals' })
})
// @Desc Update Goals
// @Route UPDATE /api/goals
// @Access Private

const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})
// @Desc Delete Goals
// @Route DELETE /api/goals
// @Access Private

const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})







module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}