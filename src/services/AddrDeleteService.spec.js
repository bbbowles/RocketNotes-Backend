const AddrRepositoryInMemory = require("../repositories/AddrRepositoryInMemory")
const AddrDeleteService = require("../services/AddrDeleteService")
const AppError = require("../utils/AppError")


describe("tests AddrDeleteService", () => {
    it("should delete note", async () => {

        const id = 1

        const addrRepository = new AddrRepositoryInMemory()

        const addrDeleteService = new AddrDeleteService(addrRepository)

        const resposta = await addrDeleteService.execute(id)

        expect(resposta).toMatch("Endereço deletado com sucesso")
    })
    it("should not delete note", async () => {

        try {
            const id = undefined

            const addrRepository = new AddrRepositoryInMemory()

            const addrDeleteService = new AddrDeleteService(addrRepository)

            const resposta = await addrDeleteService.execute(id)

            expect(resposta).toMatch("Endereço deletado com sucesso")
        } catch (error) {
            expect(error).toBeInstanceOf(AppError)
        }
    })
})