const { Router } = require('express')
const CarsController = require("../controllers/CarsController")

const carsRoutes = Router()
const carsController = new CarsController()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

carsRoutes.get('/',ensureAuthenticated, carsController.index)
carsRoutes.get('/show/:id',ensureAuthenticated, carsController.show)

module.exports = carsRoutes