const routes = require('express').Router()
const MealsController = require('./app/controller/MealsController')

routes.get('/', MealsController.findAll)

module.exports = routes