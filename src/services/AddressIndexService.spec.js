const AddrRepositoryInMemory = require("../repositories/AddressRepositoryInMemory")
const AddrIndexService = require ("./AddressIndexService")


describe("tests AddrIndexService", () => {
    it("should return an array of (2) objects", async () => {

        const addrRepository = new AddrRepositoryInMemory()

        const addrIndexService = new AddrIndexService(addrRepository)

        const resposta = await addrIndexService.execute()

        expect(resposta[0]).toHaveProperty("id")
        expect(resposta[1]).toHaveProperty("id")
    })
})