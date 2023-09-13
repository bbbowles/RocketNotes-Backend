const CarsIndexService = require("./CarsIndexService")
const CarsRepositoryInMemory = require("../repositories/CarsRepositoryInMemory")

describe("cars index service tests",()=>{
    it("4 cars should be returned on index",async ()=>{
        const carsRepository = new CarsRepositoryInMemory()
        const carsIndexService = new CarsIndexService(carsRepository)
        const dbCars = await carsIndexService.execute()

        expect(dbCars[0]).toHaveProperty("id")
        expect(dbCars[1]).toHaveProperty("id")
        expect(dbCars[2]).toHaveProperty("id")
        expect(dbCars[3]).toHaveProperty("id")

    })
})