const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: String,
    time: String,
    ingredients: [String]
})

const Recipies = mongoose.model('Recipe', recipieSchema)

module.exports = Recipes;
