const AddressRepositoryInMemory = require("../repositories/AddressRepositoryInMemory")
const AddressDeleteService = require("./AddressDeleteService")
const AppError = require("../utils/AppError")


describe("tests AddrDeleteService", () => {
    it("should delete note", async () => {

        const id = 1

        const addressRepository = new AddressRepositoryInMemory()

        const addressDeleteService = new AddressDeleteService(addressRepository)

        const resposta = await addressDeleteService.execute(id)

        expect(resposta).toMatch("Endereço deletado com sucesso")
    })
    it("should not delete note", async () => {

        try {
            const id = undefined

            const addressRepository = new AddressRepositoryInMemory()

            const addressDeleteService = new AddressDeleteService(addressRepository)

            const resposta = await addressDeleteService.execute(id)

            expect(resposta).toMatch("Endereço deletado com sucesso")
        } catch (error) {
            expect(error).toBeInstanceOf(AppError)
        }
    })
})
