const { Router } = require('express')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const CarsAdminController = require("../controllers/CarsAdminController")
const carsAdminController = new CarsAdminController()
const carsAdminRouter = Router()

carsAdminRouter.post("/", ensureAuthenticated, carsAdminController.create)
carsAdminRouter.post("/edit/", ensureAuthenticated, carsAdminController.update)
carsAdminRouter.delete("/:id", ensureAuthenticated, carsAdminController.delete)


module.exports = carsAdminRouter