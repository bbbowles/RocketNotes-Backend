const CarsCreateService = require("./CarsCreateService")
const CarsRepositoryInMemory = require("../repositories/CarsRepositoryInMemory")
const AppError = require("../utils/AppError")


describe("cars create service tests",()=>{
    it("no errors should be returned when creating a entry",async()=>{

        const dados ={
            name:"nome teste",
            brand:"marca teste",
            year:"ano teste",
            user_id:"1337"
        }

        const {name,brand,year,user_id} = dados


        const carsRepository = new CarsRepositoryInMemory()
        const carsCreateService = new CarsCreateService(carsRepository)
        const resultado = await carsCreateService.execute({name,brand,year,user_id})

        console.log(resultado)

        expect(resultado)

    })
    it("error uma ou mais variaveis nao foram informadas",async()=>{

        try{
            const dados ={
            brand:"marca teste",
            year:"ano teste",
            user_id:"1337"
        }

        const {name,brand,year,user_id} = dados


        const carsRepository = new CarsRepositoryInMemory()
        const carsCreateService = new CarsCreateService(carsRepository)
        await carsCreateService.execute({name,brand,year,user_id})
    }catch(error){
        expect(error).toBeInstanceOf(AppError)
    }

        
    })
})