const CarsIndexService = require("../services/CarsIndexService")
const CarsRepository = require("../repositories/CarsRepository")
const CarsShowService = require("../services/CarsShowService")
const CarsImagesService = require("../services/CarsImagesService")

class CarsController{
    async index(request,response){

        const {names, brand, year, nome} = request.query

        console.log({names, brand, year, nome})

        const carsRepository = new CarsRepository()

        const carsIndexService = new CarsIndexService(carsRepository)

        const dbCars = await carsIndexService.execute({names, brand, year, nome})

        return response.json(dbCars)
    }
    async show(request,response){

        const {id}=request.params

        const carsRepository = new CarsRepository()

        const carsShowService = new CarsShowService(carsRepository)

        const dbCar = await carsShowService.execute(id)

        if(dbCar.image){
        response.download(`/home/neo/Minha/codigos/teste/api/uploads/${dbCar.image}`)
        }

        return response.json(dbCar)
    }
    async images(request,response){
        const {id}=request.params

        const carsRepository = new CarsRepository()

        const carsImagesService = new CarsImagesService(carsRepository)

        const images = await carsImagesService.execute(id)

        return response.json(images)
    }
}

module.exports = CarsController
