const CarsCreateService = require("../services/CarsCreateService")
const CarsRepository = require("../repositories/CarsRepository")

class CarsController{
    async create(request,response){

        const {name,brand,year,user_id} = request.body

        const carsRepository = new CarsRepository()

        const carsCreateService = new CarsCreateService(carsRepository)

        await carsCreateService.execute({name,brand,year,user_id})

        return response.json()
    }
}
module.exports = CarsController