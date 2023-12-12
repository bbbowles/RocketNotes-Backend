const AppError = require("../utils/AppError")

class CarsCreateService{
    constructor(carsRepository){
        this.carsRepository = carsRepository
    }
    async execute({names,brand,year,user_id}){
        console.log("service",{names,brand,year,user_id})


        if(names && brand && year && user_id){
            await this.carsRepository.create({names,brand,year,user_id})

            return
        }else{
            throw new AppError("uma ou mais variaveis nao foram informadas")
        }


    }
}
module.exports = CarsCreateService
