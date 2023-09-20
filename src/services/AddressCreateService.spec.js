
const AddrRepositoryInMemory = require("../repositories/AddrRepositoryInMemory")
const AddrCreateService = require ("./AddressCreateService")
const AppError = require("../utils/AppError")

describe("tests AddrCreateService",()=>{
    it("endereco should be created",async()=>{

        const dados = {
            "cep":"123456123",
            "nome":"dom joao segundo junior terceiro",
            "cidade":"sorocaba do sul",
            "bairro":"camisas",
            "estado":"maracuja",
            "numero":"1234",
            "complemento":"perto da padaria",
            "user_id":"2"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrCreateService = new AddrCreateService(addrRepository)

        const resposta = await addrCreateService.execute(dados)

        console.log(resposta)

        expect(resposta).toMatch("endereço criado no banco de dados")
    })
    it("endereco should be created, even without complemento",async()=>{

        const dados = {
            "cep":"123456123",
            "nome":"dom joao segundo junior terceiro",
            "cidade":"sorocaba do sul",
            "bairro":"camisas",
            "estado":"maracuja",
            "numero":"1234",
            "user_id":"2"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrCreateService = new AddrCreateService(addrRepository)

        const resposta = await addrCreateService.execute(dados)

        console.log(resposta)

        expect(resposta).toMatch("endereço criado no banco de dados")
    })
    it("endereco should not be created",async()=>{

        try{const dados = {
            "nome":"dom joao segundo junior terceiro",
            "cidade":"sorocaba do sul",
            "bairro":"camisas",
            "estado":"maracuja",
            "numero":"1234",
            "complemento":"perto da padaria",
            "user_id":"2"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrCreateService = new AddrCreateService(addrRepository)

        const resposta = await addrCreateService.execute(dados)

        console.log(resposta)
        }catch(error){
            expect(error).toBeInstanceOf(AppError)

        }

    })
    it("endereco should not be created",async()=>{

        try{const dados = {
            "cep":"123456123",
            "cidade":"sorocaba do sul",
            "bairro":"camisas",
            "estado":"maracuja",
            "numero":"1234",
            "complemento":"perto da padaria",
            "user_id":"2"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrCreateService = new AddrCreateService(addrRepository)

        const resposta = await addrCreateService.execute(dados)

        console.log(resposta)
        }catch(error){
            expect(error).toBeInstanceOf(AppError)

        }

    })
    it("endereco should not be created",async()=>{

        try{const dados = {
            "cep":"123456123",
            "nome":"dom joao segundo junior terceiro",
            "bairro":"camisas",
            "estado":"maracuja",
            "numero":"1234",
            "complemento":"perto da padaria",
            "user_id":"2"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrCreateService = new AddrCreateService(addrRepository)

        const resposta = await addrCreateService.execute(dados)

        console.log(resposta)
        }catch(error){
            expect(error).toBeInstanceOf(AppError)

        }

    })
    it("endereco should not be created",async()=>{

        try{const dados = {
            "cep":"123456123",
            "nome":"dom joao segundo junior terceiro",
            "cidade":"sorocaba do sul",
            "estado":"maracuja",
            "numero":"1234",
            "complemento":"perto da padaria",
            "user_id":"2"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrCreateService = new AddrCreateService(addrRepository)

        const resposta = await addrCreateService.execute(dados)

        console.log(resposta)
        }catch(error){
            expect(error).toBeInstanceOf(AppError)

        }

    })
    it("endereco should not be created",async()=>{

        try{const dados = {
            "cep":"123456123",
            "nome":"dom joao segundo junior terceiro",
            "cidade":"sorocaba do sul",
            "bairro":"camisas",
            "numero":"1234",
            "complemento":"perto da padaria",
            "user_id":"2"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrCreateService = new AddrCreateService(addrRepository)

        const resposta = await addrCreateService.execute(dados)

        console.log(resposta)
        }catch(error){
            expect(error).toBeInstanceOf(AppError)

        }

    })
    it("endereco should not be created",async()=>{

        try{const dados = {
            "cep":"123456123",
            "nome":"dom joao segundo junior terceiro",
            "cidade":"sorocaba do sul",
            "bairro":"camisas",
            "estado":"maracuja",
            "complemento":"perto da padaria",
            "user_id":"2"
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrCreateService = new AddrCreateService(addrRepository)

        const resposta = await addrCreateService.execute(dados)

        console.log(resposta)
        }catch(error){
            expect(error).toBeInstanceOf(AppError)

        }

    })
    it("endereco should not be created",async()=>{

        try{const dados = {
            "cep":"123456123",
            "nome":"dom joao segundo junior terceiro",
            "cidade":"sorocaba do sul",
            "bairro":"camisas",
            "estado":"maracuja",
            "numero":"1234",
            "complemento":"perto da padaria",
        }

        const addrRepository = new AddrRepositoryInMemory()

        const addrCreateService = new AddrCreateService(addrRepository)

        const resposta = await addrCreateService.execute(dados)

        console.log(resposta)
        }catch(error){
            expect(error).toBeInstanceOf(AppError)

        }

    })

})