const { Router } = require('express')
const CarsController = require("../controllers/CarsController")

const carsRoutes = Router()
const carsController = new CarsController()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

carsRoutes.get('/',ensureAuthenticated, carsController.index)

module.exports = carsRoutes