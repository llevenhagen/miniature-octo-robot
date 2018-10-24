const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: String,
    time: String,
    ingredients: String,
    img: String
})

const Recipes = mongoose.model('Recipe', recipeSchema)

module.exports = Recipes;
