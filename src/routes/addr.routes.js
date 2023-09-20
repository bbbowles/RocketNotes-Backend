const { Router } = require('express')
const AddrController = require("../controllers/AddrController")

const addrRoutes = Router()
const addrController = new AddrController()
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

addrRoutes.use(ensureAuthenticated)


addrRoutes.get("/", addrController.index)
addrRoutes.get("/:id", addrController.show)
addrRoutes.post("/",addrController.create)
addrRoutes.put("/:id?",addrController.update)
addrRoutes.delete("/:id?",addrController.delete)

module.exports = addrRoutes