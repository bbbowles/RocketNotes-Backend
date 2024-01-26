const AppError = require("../utils/AppError")
const fs = require('fs').promises;

class CarsDeleteImageService {
    constructor(carsRepository) {
        this.carsRepository = carsRepository
    }
    async execute(image) {

        if (image) {

            console.log("service",image)

            fs.rm(`/home/neo/Minha/codigos/teste/api/uploads/${image}.png`)

            this.carsRepository.updateImage(image)

            return
        }else{
            throw new AppError("nao foi possivel deletar a imagem")
        }

    }
}
module.exports = CarsDeleteImageService
