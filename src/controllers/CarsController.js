const CarsIndexService = require("../services/CarsIndexService")
const CarsRepository = require("../repositories/CarsRepository")

class CarsController{
    async index(request,response){

        const carsRepository = new CarsRepository()

        const carsIndexService = new CarsIndexService(carsRepository)

        const dbCars = await carsIndexService.execute()

        return response.json(dbCars)
    }
}

module.exports = CarsController