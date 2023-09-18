const AppError = require("../utils/AppError")

class CarsUpdateService {
    constructor(carsRepository) {
        this.carsRepository = carsRepository
    }
    async execute({ name, brand, year, user_id, id }) {

        if (name && brand && year && user_id && id) {
            this.carsRepository.update({ name, brand, year, user_id, id })

            return
        }else{
            throw new AppError("nao foi possivel editar a entry")
        }

    }
}
module.exports = CarsUpdateService