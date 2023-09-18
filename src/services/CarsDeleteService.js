const AppError = require("../utils/AppError")

class CarsDeleteService{

    constructor(carsRepository){
        this.carsRepository = carsRepository
    }

    async execute(id){


        if(id){
            this.carsRepository.delete(id)
            return 
        }else{
            throw new AppError("tabela nao existe")
        }
        


    }
}
module.exports = CarsDeleteService