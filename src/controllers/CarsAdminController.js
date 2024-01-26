const CarsCreateService = require("../services/CarsCreateService")
const CarsRepository = require("../repositories/CarsRepository")
const CarsDeleteService = require("../services/CarsDeleteService")
const CarsUpdateService = require("../services/CarsUpdateService")
const CarsAddImgService = require("../services/CarsAddImgService")
const CarsDeleteImageService = require("../services/CarsDeleteImageService")

class CarsController {
    async create(request, response) {

        const { names, brand, year, user_id } = request.body

        const carsRepository = new CarsRepository()

        const carsCreateService = new CarsCreateService(carsRepository)
        console.log("controller", { names, brand, year, user_id })


        await carsCreateService.execute({ names, brand, year, user_id: "1" })

        // PELAMOR DE DEUS TIRE O USER:1<---- DEPOIS DE CONCERTAR

        return response.json()
    }
    async delete(request, response) {

        const { id } = request.params

        console.log(id)


        const carsRepository = new CarsRepository()

        const carsDeleteService = new CarsDeleteService(carsRepository)

        await carsDeleteService.execute(id)

        return response.json()
    }
    async update(request, response) {

        const { names, brand, year, user_id, id } = request.body

        console.log("caiu no update")
        console.log({ names, brand, year, user_id, id })

        const carsRepository = new CarsRepository()

        const carsUpdateService = new CarsUpdateService(carsRepository)

        await carsUpdateService.execute({ names, brand, year, user_id, id })

        return response.json()


    }

    async addImg({ req, res }) {
        // const {uri} = req.body.formData._parts[0][1]
        // const {type} = req.body.formData._parts[0][1]
        // const {name} = req.body.formData._parts[0][1]


        console.log(req.body)
        // console.log("addimg",req.body.formData)

        const carsRepository = new CarsRepository()

        const carsAddImgService = new CarsAddImgService(carsRepository)

        // await carsAddImgService.execute({uri,type,name})

        return
    }

    async deleteImage(req,res) {
        const { image } = req.params

        console.log("controller",image)

        const carsRepository = new CarsRepository()

        const carsDeleteImageService = new CarsDeleteImageService(carsRepository)

        await carsDeleteImageService.execute(image)

        return

    }
}
module.exports = CarsController
