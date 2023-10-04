const UserCreateService = require("./UserCreateService")
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory")
const AppError = require("../utils/AppError")

describe("UserCreateService", () => {
    it("a user should be created", async () => {
        const user = {
            name: "user test",
            email: "user@test.com",
            password: "123"
        }

        const userRepositoryInMemory = new UserRepositoryInMemory()
        const userCreateService = new UserCreateService(userRepositoryInMemory)
        const userCreated = await userCreateService.execute(user)

        console.log("user created",userCreated)

        expect(userCreated).toHaveProperty("id")



    })
    it("a user should not be created", async () => {
        try {
            const user = {
                email: "user@test.com",
                password: "123"
            }

            const {name,email,password} = user


            const userRepositoryInMemory = new UserRepositoryInMemory()
            const userCreateService = new UserCreateService(userRepositoryInMemory)
            const userCreated = await userCreateService.execute({name,email,password})

            console.log(userCreated)
        } catch(error){
            console.log("error",error)
            expect(error).toBeInstanceOf(AppError)
        }



    })

})


