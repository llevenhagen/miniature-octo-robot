const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: String,
    time: String,
    ingredients: [String]
})

const Recipes = mongoose.model('Recipe', recipieSchema)

module.exports = Recipes;
