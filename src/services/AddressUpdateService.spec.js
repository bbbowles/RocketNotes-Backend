const AddressRepositoryInMemory = require("../repositories/AddressRepositoryInMemory")
const AddressUpdateService = require("./AddressUpdateService")
const AppError = require("../utils/AppError")
const UserRepository = require("../repositories/UserRepository")
const z = require('zod')

describe("tests AddrUpdateService", () => {
    it("should edit addr", async () => {

        const addressSchema = z.object({
            cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

            nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

            numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999,{message:"Número muito grande!"}),

            user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" }),

            id: z.number().int().gte(1,{message: "id do endereco precisa ser maior ou igual a 1"})

        })

        const dados = {
            "cep":"12345678",
            "nome": "dom joao segundo",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "estado": "ma",
            "numero": 1234,
            "complemento": "perto da padaria",
            "user_id": 2,
            "id": 1
        }

        const parseResposta = addressSchema.safeParse(dados)

            if (!parseResposta.success) {
                const formatted = parseResposta.error.format()


                throw new AppError(formatted,400)
            } else{
                const addressRepository = new AddressRepositoryInMemory()

                const userRepository = new UserRepository()

                const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

                const resposta = await addressUpdateService.execute(dados)

                expect(resposta).toMatch("Endereço atualizado com sucesso!")
            }


    })
    it("should edit addr", async () => {

        const addressSchema = z.object({
            cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

            nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

            numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999,{message:"Número muito grande!"}),

            user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" }),

            id: z.number().int().gte(1,{message: "id do endereco precisa ser maior ou igual a 1"})

        })

        const dados = {
            "nome": "dom joao segundo",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "estado": "ma",
            "numero": 1234,
            "complemento": "perto da padaria",
            "user_id": 2,
            "id": 1
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

        const resposta = await addressUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr", async () => {

        const addressSchema = z.object({
            cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

            nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

            numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999,{message:"Número muito grande!"}),

            user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" }),

            id: z.number().int().gte(1,{message: "id do endereco precisa ser maior ou igual a 1"})

        })

        const dados = {
            "cep":"12345678",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "estado": "ma",
            "numero": 1234,
            "complemento": "perto da padaria",
            "user_id": 2,
            "id": 1
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

        const resposta = await addressUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr", async () => {

        const addressSchema = z.object({
            cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

            nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

            numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999,{message:"Número muito grande!"}),

            user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" }),

            id: z.number().int().gte(1,{message: "id do endereco precisa ser maior ou igual a 1"})

        })

        const dados = {
            "cep":"12345678",
            "nome": "dom joao segundo",
            "bairro": "camisas",
            "estado": "ma",
            "numero": 1234,
            "complemento": "perto da padaria",
            "user_id": 2,
            "id": 1
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

        const resposta = await addressUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr", async () => {

        const addressSchema = z.object({
            cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

            nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

            numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999,{message:"Número muito grande!"}),

            user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" }),

            id: z.number().int().gte(1,{message: "id do endereco precisa ser maior ou igual a 1"})

        })

        const dados = {
            "cep":"12345678",
            "nome": "dom joao segundo",
            "cidade": "sorocaba do sul",
            "estado": "ma",
            "numero": 1234,
            "complemento": "perto da padaria",
            "user_id": 2,
            "id": 1
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

        const resposta = await addressUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr", async () => {

        const addressSchema = z.object({
            cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

            nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

            numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999,{message:"Número muito grande!"}),

            user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" }),

            id: z.number().int().gte(1,{message: "id do endereco precisa ser maior ou igual a 1"})

        })

        const dados = {
            "cep":"12345678",
            "nome": "dom joao segundo",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "numero": 1234,
            "complemento": "perto da padaria",
            "user_id": 2,
            "id": 1
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

        const resposta = await addressUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr", async () => {

        const addressSchema = z.object({
            cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

            nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

            numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999,{message:"Número muito grande!"}),

            user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" }),

            id: z.number().int().gte(1,{message: "id do endereco precisa ser maior ou igual a 1"})

        })

        const dados = {
            "cep":"12345678",
            "nome": "dom joao segundo",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "estado": "ma",
            "complemento": "perto da padaria",
            "user_id": 2,
            "id": 1
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

        const resposta = await addressUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should edit addr", async () => {

        const addressSchema = z.object({
            cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

            nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

            numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999,{message:"Número muito grande!"}),

            user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" }),

            id: z.number().int().gte(1,{message: "id do endereco precisa ser maior ou igual a 1"})

        })

        const dados = {
            "cep":"12345678",
            "nome": "dom joao segundo",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "estado": "ma",
            "numero": 1234,
            "user_id": 2,
            "id": 1
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

        const resposta = await addressUpdateService.execute(dados)

        expect(resposta).toMatch("Endereço atualizado com sucesso!")
    })
    it("should not edit addr", async () => {

        const addressSchema = z.object({
            cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

            nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

            numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999,{message:"Número muito grande!"}),

            user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" }),

            id: z.number().int().gte(1,{message: "id do endereco precisa ser maior ou igual a 1"})

        })

        try{
            const dados = {
                "cep":"12345678",
                "nome": "dom joao segundo",
                "cidade": "sorocaba do sul",
                "bairro": "camisas",
                "estado": "ma",
                "numero": 1234,
                "complemento": "perto da padaria",
                "id": 1
            }

            const addressRepository = new AddressRepositoryInMemory()

            const addressUpdateService = new AddressUpdateService(addressRepository)

            await addressUpdateService.execute(dados)

        }catch(error){
            expect(error).toBeInstanceOf(AppError)
        }

    })
    it("should not edit addr because we dont pass an id", async () => {

        const addressSchema = z.object({
            cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

            nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30,{message:"Texto muito grande!"}),

            estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

            numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999,{message:"Número muito grande!"}),

            user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" }),

            id: z.number().int().gte(1,{message: "id do endereco precisa ser maior ou igual a 1"})

        })

        const dados = {
            "cep":"12345678",
            "nome": "dom joao segundo",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "estado": "ma",
            "numero": 1234,
            "complemento": "perto da padaria",
            "user_id": 2,
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
