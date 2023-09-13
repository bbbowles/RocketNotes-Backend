class CarsIndexService{

    constructor(carsRepository){
        this.carsRepository = carsRepository
    }

    async execute(){
        const dbCars = await this.carsRepository.index()
        return dbCars
    }
}
module.exports = CarsIndexService