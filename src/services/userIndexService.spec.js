const UserRepository = require("../repositories/UserRepositoryInMemory")
const UserIndexService =require("../services/UserIndexService")

describe("tests involving the index service of users",()=>{
    it("should index all users",async()=>{

        const userRepository = new UserRepository()

        const userIndexService = new UserIndexService(userRepository)
    
        const resposta = await userIndexService.execute()

        expect(resposta[0]).toHaveProperty("name")
        expect(resposta[1]).toHaveProperty("name")

    
    })
})