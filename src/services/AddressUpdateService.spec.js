const AddressRepositoryInMemory = require("../repositories/AddressRepositoryInMemory")
const AddressUpdateService = require("./AddressUpdateService")
const AppError = require("../utils/AppError")
const UserRepository = require("../repositories/UserRepository")

describe("tests AddrUpdateService", () => {
    it("should edit addr", async () => {

        dados = {
            "cep":"12345678",
            "nome": "dom joao segundo junior terceiro",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "estado": "maracuja",
            "numero": "1234",
            "complemento": "perto da padaria",
            "user_id": "2",
            "id": "1"
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

        const resposta = await addressUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr", async () => {

        dados = {
            "nome": "dom joao segundo junior terceiro",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "estado": "maracuja",
            "numero": "1234",
            "complemento": "perto da padaria",
            "user_id": "2",
            "id": "1"
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

        const resposta = await addressUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr", async () => {

        dados = {
            "cep":"12345678",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "estado": "maracuja",
            "numero": "1234",
            "complemento": "perto da padaria",
            "user_id": "2",
            "id": "1"
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

        const resposta = await addressUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr", async () => {

        dados = {
            "cep":"12345678",
            "nome": "dom joao segundo junior terceiro",
            "bairro": "camisas",
            "estado": "maracuja",
            "numero": "1234",
            "complemento": "perto da padaria",
            "user_id": "2",
            "id": "1"
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

        const resposta = await addressUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr", async () => {

        dados = {
            "cep":"12345678",
            "nome": "dom joao segundo junior terceiro",
            "cidade": "sorocaba do sul",
            "estado": "maracuja",
            "numero": "1234",
            "complemento": "perto da padaria",
            "user_id": "2",
            "id": "1"
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

        const resposta = await addressUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr", async () => {

        dados = {
            "cep":"12345678",
            "nome": "dom joao segundo junior terceiro",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "numero": "1234",
            "complemento": "perto da padaria",
            "user_id": "2",
            "id": "1"
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

        const resposta = await addressUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr", async () => {

        dados = {
            "cep":"12345678",
            "nome": "dom joao segundo junior terceiro",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "estado": "maracuja",
            "complemento": "perto da padaria",
            "user_id": "2",
            "id": "1"
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

        const resposta = await addressUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr", async () => {

        dados = {
            "cep":"12345678",
            "nome": "dom joao segundo junior terceiro",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "estado": "maracuja",
            "numero": "1234",
            "user_id": "2",
            "id": "1"
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

        const resposta = await addressUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should not edit addr", async () => {

        try{
            dados = {
                "cep":"12345678",
                "nome": "dom joao segundo junior terceiro",
                "cidade": "sorocaba do sul",
                "bairro": "camisas",
                "estado": "maracuja",
                "numero": "1234",
                "complemento": "perto da padaria",
                "id": "1"
            }

            const addressRepository = new AddressRepositoryInMemory()

            const addressUpdateService = new AddressUpdateService(addressRepository)

            await addressUpdateService.execute(dados)

        }catch(error){
            expect(error).toBeInstanceOf(AppError)
        }

    })
    it("should not edit addr because we dont pass an id", async () => {

        dados = {
            "cep":"12345678",
            "nome": "dom joao segundo junior terceiro",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "estado": "maracuja",
            "numero": "1234",
            "complemento": "perto da padaria",
            "user_id": "2",
        }
        try {
            const addressRepository = new AddressRepositoryInMemory()

            const userRepository = new UserRepository()

            const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

            const resposta = await addressUpdateService.execute(dados)
        } catch (error) {
            expect(error).toBeInstanceOf(AppError)
        }



    })
})
