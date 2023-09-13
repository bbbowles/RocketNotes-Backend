const AppError = require("../utils/AppError")

class CarsCreateService{
    constructor(carsRepository){
        this.carsRepository = carsRepository
    }
    async execute({name,brand,year,user_id}){

        console.log({names:name})

        if(name && brand && year && user_id){
            await this.carsRepository.create({names:name,brand,year,user_id})
            
            return
        }else{
            throw new AppError("uma ou mais variaveis nao foram informadas")
        }


    }
}
module.exports = CarsCreateService