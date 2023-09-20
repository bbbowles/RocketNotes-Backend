const AddrRepositoryInMemory = require ("../repositories/AddressRepositoryInMemory")
const AddrUpdateService = require("./AddressUpdateService")
const AppError = require("../utils/AppError")

describe("tests AddrUpdateService",()=>{
    it("should edit addr",async()=>{

        dados={
            "cep":"123456123",
            "nome":"dom joao segundo junior terceiro",
            "cidade":"sorocaba do sul",
            "bairro":"camisas",
            "estado":"maracuja",
            "numero":"1234",
            "complemento":"perto da padaria",
            "user_id":"1",
            "id":"1"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrUpdateService = new AddrUpdateService(addrRepository)

        const resposta = await addrUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr",async()=>{

        dados={
            "nome":"dom joao segundo junior terceiro",
            "cidade":"sorocaba do sul",
            "bairro":"camisas",
            "estado":"maracuja",
            "numero":"1234",
            "complemento":"perto da padaria",
            "user_id":"1",
            "id":"1"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrUpdateService = new AddrUpdateService(addrRepository)

        const resposta = await addrUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr",async()=>{

        dados={
            "cep":"123456123",
            "cidade":"sorocaba do sul",
            "bairro":"camisas",
            "estado":"maracuja",
            "numero":"1234",
            "complemento":"perto da padaria",
            "user_id":"1",
            "id":"1"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrUpdateService = new AddrUpdateService(addrRepository)

        const resposta = await addrUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr",async()=>{

        dados={
            "cep":"123456123",
            "nome":"dom joao segundo junior terceiro",
            "bairro":"camisas",
            "estado":"maracuja",
            "numero":"1234",
            "complemento":"perto da padaria",
            "user_id":"1",
            "id":"1"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrUpdateService = new AddrUpdateService(addrRepository)

        const resposta = await addrUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr",async()=>{

        dados={
            "cep":"123456123",
            "nome":"dom joao segundo junior terceiro",
            "cidade":"sorocaba do sul",
            "estado":"maracuja",
            "numero":"1234",
            "complemento":"perto da padaria",
            "user_id":"1",
            "id":"1"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrUpdateService = new AddrUpdateService(addrRepository)

        const resposta = await addrUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr",async()=>{

        dados={
            "cep":"123456123",
            "nome":"dom joao segundo junior terceiro",
            "cidade":"sorocaba do sul",
            "bairro":"camisas",
            "numero":"1234",
            "complemento":"perto da padaria",
            "user_id":"1",
            "id":"1"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrUpdateService = new AddrUpdateService(addrRepository)

        const resposta = await addrUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr",async()=>{

        dados={
            "cep":"123456123",
            "nome":"dom joao segundo junior terceiro",
            "cidade":"sorocaba do sul",
            "bairro":"camisas",
            "estado":"maracuja",
            "complemento":"perto da padaria",
            "user_id":"1",
            "id":"1"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrUpdateService = new AddrUpdateService(addrRepository)

        const resposta = await addrUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr",async()=>{

        dados={
            "cep":"123456123",
            "nome":"dom joao segundo junior terceiro",
            "cidade":"sorocaba do sul",
            "bairro":"camisas",
            "estado":"maracuja",
            "numero":"1234",
            "user_id":"1",
            "id":"1"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrUpdateService = new AddrUpdateService(addrRepository)

        const resposta = await addrUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr",async()=>{

        dados={
            "cep":"123456123",
            "nome":"dom joao segundo junior terceiro",
            "cidade":"sorocaba do sul",
            "bairro":"camisas",
            "estado":"maracuja",
            "numero":"1234",
            "complemento":"perto da padaria",
            "id":"1"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrUpdateService = new AddrUpdateService(addrRepository)

        const resposta = await addrUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should not edit addr because we dont pass an id",async()=>{

        dados={
            "cep":"123456123",
            "nome":"dom joao segundo junior terceiro",
            "cidade":"sorocaba do sul",
            "bairro":"camisas",
            "estado":"maracuja",
            "numero":"1234",
            "complemento":"perto da padaria",
            "user_id":"1",
        }
        try{
            const addrRepository = new AddrRepositoryInMemory()

            const addrUpdateService = new AddrUpdateService(addrRepository)
    
            const resposta = await addrUpdateService.execute(dados)
        }catch(error){
            expect(error).toBeInstanceOf(AppError)
        }

       

    })
})