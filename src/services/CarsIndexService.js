class CarsIndexService{

    constructor(carsRepository){
        this.carsRepository = carsRepository
    }

    async execute({names, brand, year, nome}){
        names = names ? names : ""
        brand = brand ? brand : ""
        year = year ? year : ""
        nome =  nome ? nome : ""
        console.log(names)
        const dbCars = await this.carsRepository.index(names, brand, year, nome)
        return dbCars
    }
}
module.exports = CarsIndexService
