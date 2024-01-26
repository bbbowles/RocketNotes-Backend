class CarsImagesService{
    constructor(carsRepository){
        this.carsRepository = carsRepository
    }
    async execute(id){
        if(id && !isNaN(id)){
            const images = this.carsRepository.images(id)


            return images
        }
    }

}
module.exports = CarsImagesService
