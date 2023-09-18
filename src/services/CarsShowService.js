const AppError = require("../utils/AppError")

class CarsShowService {
    constructor(carsRepository) {
        this.carsRepository = carsRepository
    }
    async execute(id) {
        if (id) {
            const dbCar = this.carsRepository.show(id)

            return dbCar
        }else{
            throw new AppError("carro nao encontrado ou nao existe")
        }


    }
}
module.exports = CarsShowService