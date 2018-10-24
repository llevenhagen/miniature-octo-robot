const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())
app.use(express.static('public'))

const recipesController = require('./controllers/recipes.js')
app.use('/recipes', recipesController)


mongoose.connect('mongodb://localhost:27017/cookbook', { useNewUrlParser: true })

mongoose.connection.once('open', () => {
  console.log('Connected to Mongoose!')
})

app.listen(3000, ()=> {
  console.log('Listening on Port 3000..')
})
