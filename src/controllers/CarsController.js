const CarsIndexService = require("../services/CarsIndexService")
const CarsRepository = require("../repositories/CarsRepository")
const CarsShowService = require("../services/CarsShowService")

class CarsController{
    async index(request,response){

        const carsRepository = new CarsRepository()

        const carsIndexService = new CarsIndexService(carsRepository)

        const dbCars = await carsIndexService.execute()

        return response.json(dbCars)
    }
    async show(request,response){

        const {id}=request.params

        const carsRepository = new CarsRepository()

        const carsShowService = new CarsShowService(carsRepository)

        const dbCar = await carsShowService.execute(id)

        return response.json(dbCar)
    }
}

module.exports = CarsController