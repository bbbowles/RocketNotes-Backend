const CarsCreateService = require("../services/CarsCreateService")
const CarsRepository = require("../repositories/CarsRepository")
const CarsDeleteService = require("../services/CarsDeleteService")
const CarsUpdateService = require("../services/CarsUpdateService")



class CarsController{
    async create(request,response){

        const {name,brand,year,user_id} = request.body

        const carsRepository = new CarsRepository()

        const carsCreateService = new CarsCreateService(carsRepository)

        await carsCreateService.execute({name,brand,year,user_id})

        return response.json()
    }
    async delete(request,response){

        const {id} = request.params
        
        console.log(id)


        const carsRepository = new CarsRepository()

        const carsDeleteService = new CarsDeleteService(carsRepository)

        await carsDeleteService.execute(id)

        return response.json()
    }
    async update(request,response){

        const {name,brand,year,user_id,id} = request.body

        console.log({name,brand,year,user_id,id})

        const carsRepository = new CarsRepository()

        const carsUpdateService = new CarsUpdateService(carsRepository)

        await carsUpdateService.execute({name,brand,year,user_id,id})

        return response.json()

        
    }
}
module.exports = CarsController