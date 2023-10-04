const { Router } = require('express')
const AddressController = require("../controllers/AddressController")

const addressRoutes = Router()
const addressController = new AddressController()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

addressRoutes.use(ensureAuthenticated)


addressRoutes.get("/", addressController.index)
addressRoutes.post("/filtered/",addressController.showFilter)
addressRoutes.get("/:id", addressController.show)
addressRoutes.post("/",addressController.create)
addressRoutes.put("/:id?",addressController.update)
addressRoutes.delete("/:id?",addressController.delete)

module.exports = addressRoutes
