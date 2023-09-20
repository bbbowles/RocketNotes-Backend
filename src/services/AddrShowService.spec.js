const AddrRepositoryInMemory = require ("../repositories/AddrRepositoryInMemory")
const AddrShowService = require("./AddrShowService")


describe("tests AddrShowService",()=>{
    it("should return a single result based on the (user) id",async()=>{

        const id = 1

        const addrRepository = new AddrRepositoryInMemory()

        const addrShowService = new AddrShowService(addrRepository)

        const resposta = await addrShowService.execute(id)

        expect(resposta).toHaveProperty("id")
    })
})