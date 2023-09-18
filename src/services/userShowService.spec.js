const UserRepository = require("../repositories/UserRepositoryInMemory")
const UserShowService = require("../services/UserShowService")
const AppError = require("../utils/AppError")


describe("tests involving user show service", () => {
    it("should show a specific user", async () => {
        const id = 1
        console.log(id)

        const userRepository = new UserRepository()

        const userShowService = new UserShowService(userRepository)

        const resposta = await userShowService.execute(id)

        expect(resposta[0]).toHaveProperty("id")
    })
    it("should not show users specific user", async () => {
        try {
            const id = null
            console.log(id)

            const userRepository = new UserRepository()

            const userShowService = new UserShowService(userRepository)

            await userShowService.execute(id)
        }
        catch (error) {
            expect(error).toBeInstanceOf(AppError)
        }



    })
})