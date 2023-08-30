/*constantes*/
const Router = require("express")
const UsersController = require("../controllers/UsersController.js")
const usersRoutes = Router()
const UserAvatarController = require("../controllers/UserAvatarController.js")


const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const uploadConfig = require("../configs/upload.js")
const multer = require("multer")
const upload = multer(uploadConfig.MULTER)

const userAvatarController = new UserAvatarController()
const usersController = new UsersController()



usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuthenticated, usersController.update)
usersRoutes.patch("/avatar", ensureAuthenticated,upload.single("avatar"), userAvatarController.update)
//depois de colocar ensureAuthenticated nao precisa mais colocar o :id

/*exports*/
module.exports = usersRoutes
