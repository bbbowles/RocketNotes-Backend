const CarsCreateService = require("../services/CarsCreateService")
const CarsRepository = require("../repositories/CarsRepository")
const CarsDeleteService = require("../services/CarsDeleteService")
const CarsUpdateService = require("../services/CarsUpdateService")



class CarsController{
    async create(request,response){

        const {names,brand,year,user_id} = request.body

        const carsRepository = new CarsRepository()

        const carsCreateService = new CarsCreateService(carsRepository)
        console.log("controller",{names,brand,year,user_id})


        await carsCreateService.execute({names,brand,year,user_id})

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

        const {names,brand,year,user_id,id} = request.body

        console.log({names,brand,year,user_id,id})

        const carsRepository = new CarsRepository()

        const carsUpdateService = new CarsUpdateService(carsRepository)

        await carsUpdateService.execute({names,brand,year,user_id,id})

        return response.json()


    }
}
module.exports = CarsController
