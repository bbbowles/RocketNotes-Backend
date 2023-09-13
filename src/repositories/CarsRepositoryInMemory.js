class CarsRepository{
    async index(){
        const dbCars = [
            {
                "id": 1,
                "name": "mx3",
                "brand": "mazda",
                "year": 1992,
                "user_id": 1
            },
            {
                "id": 2,
                "name": "fusca",
                "brand": "vw",
                "year": 1970,
                "user_id": 1
            },
            {
                "id": 3,
                "name": "golf",
                "brand": "vw",
                "year": 2004,
                "user_id": 1
            },
            {
                "id": 4,
                "name": "jetta",
                "brand": "vw",
                "year": 2004,
                "user_id": 1
            }
        ]

        return dbCars
    }
    async create({name,brand,year,user_id}){

        return
    }
}
module.exports = CarsRepository
