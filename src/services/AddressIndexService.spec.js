const AddressRepositoryInMemory = require("../repositories/AddressRepositoryInMemory")
const AddressIndexService = require ("./AddressIndexService")


describe("tests AddrIndexService", () => {
    it("should return an array of (2) objects", async () => {

        const addressRepository = new AddressRepositoryInMemory()

        const addressIndexService = new AddressIndexService(addressRepository)

        const resposta = await addressIndexService.execute()

        expect(resposta[0]).toHaveProperty("id")
        expect(resposta[1]).toHaveProperty("id")
    })
})
