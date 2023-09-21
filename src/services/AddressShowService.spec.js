const AddressRepositoryInMemory = require ("../repositories/AddressRepositoryInMemory")
const AddressShowService = require("./AddrShowService")


describe("tests AddrShowService",()=>{
    it("should return a single result based on the (user) id",async()=>{

        const id = 1

        const addressRepository = new AddressRepositoryInMemory()

        const addressShowService = new AddressShowService(addressRepository)

        const resposta = await addressShowService.execute(id)

        expect(resposta).toHaveProperty("id")
    })
})
