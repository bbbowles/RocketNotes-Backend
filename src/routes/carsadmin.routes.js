const { Router } = require('express')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const CarsAdminController = require("../controllers/CarsAdminController")
const carsAdminController = new CarsAdminController()
const carsAdminRouter = Router()

const crypto = require("crypto")


const uploadConfig = require("../configs/upload.js")
const multer = require("multer");

// const upload = multer({
//     dest: "uploads/",
//     limits: { fieldSize: 25 * 1024 * 1024 }

// })

// const storage = multer.diskStorage({
//     destination: function(res,file,cb){
//         cb("uploads/")
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })
// const upload = multer({
//     storage: storage,
//     limits: { fieldSize: 25 * 1024 * 1024 }

// })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/home/neo/Minha/codigos/teste/api/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + ".png")
    }
})

const upload = multer({
    storage: storage,
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...')
    }
})


function uploadFiles(req, res) {
    console.log("Foto salva no banco");
    console.log(req.body)
    console.log(req.file)
    res.json({ message: "Foto Salva com Sucesso" });
}

carsAdminRouter.post("/", ensureAuthenticated, carsAdminController.create)
carsAdminRouter.post("/edit/", ensureAuthenticated, carsAdminController.update)
carsAdminRouter.delete("/:id", ensureAuthenticated, carsAdminController.delete)
carsAdminRouter.post("/image", upload.single("file"), uploadFiles)
carsAdminRouter.delete("/image/:image", carsAdminController.deleteImage)


module.exports = carsAdminRouter
