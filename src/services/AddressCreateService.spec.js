const AddressRepositoryInMemory = require("../repositories/AddressRepositoryInMemory")
const AddressCreateService = require("./AddressCreateService")
const AppError = require("../utils/AppError")
const UserRepository = require("../repositories/UserRepositoryInMemory")
const z = require('zod')


describe("tests AddrCreateService", () => {
    it("endereco should be created", async () => {

        const dados = {
            "cep": "12345612",
            "nome": "dom joao segundo junior terceiro",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "estado": "ma",
            "numero": 1234,
            "complemento": "perto da padaria",
            "user_id": 2
        }

        const addressRepository = new AddressRepositoryInMemory()

        const userRepository = new UserRepository()

        const addressCreateService = new AddressCreateService(addressRepository, userRepository)

        const resposta = await addressCreateService.execute(dados)

        console.log(resposta)

        expect(resposta).toMatch("endereço criado no banco de dados")
    })
    it("endereco should be created, even without complemento", async () => {

        const addressSchema = z.object({
            cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

            nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

            cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

            bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

            estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

            numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999, { message: "Número muito grande!" }),

            user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" })

        })

        const dados = {
            "cep": "12345612",
            "nome": "dom joao segundo junior",
            "cidade": "sorocaba do sul",
            "bairro": "camisas",
            "estado": "ma",
            "numero": 1234,
            "user_id": 2
        }
        const parseResposta = addressSchema.safeParse(dados)

        console.log("parseresposta", parseResposta)

        if (!parseResposta.success) {
            const formatted = parseResposta.error.format()

            console.log("formated error", formatted)

            throw new AppError(formatted, 400)
        } else {
            console.log("else")

            const addressRepository = new AddressRepositoryInMemory()

            const userRepository = new UserRepository()

            const addressCreateService = new AddressCreateService(addressRepository, userRepository)

            const resposta = await addressCreateService.execute(dados)

            expect(resposta).toMatch("endereço criado no banco de dados")
        }





    })
    it("endereco should not be created", async () => {

        try {
            const dados = {
                "nome": "dom joao segundo junior terceiro",
                "cidade": "sorocaba do sul",
                "bairro": "camisas",
                "estado": "ma",
                "numero": 1234,
                "complemento": "perto da padaria",
                "user_id": 2
            }

            const addressRepository = new AddressRepositoryInMemory()

            const userRepository = new UserRepository()

            const addressCreateService = new AddressCreateService(addressRepository, userRepository)

            const resposta = await addressCreateService.execute(dados)

            console.log(resposta)
        } catch (error) {
            expect(error).toBeInstanceOf(AppError)

        }

    })
    it("endereco should not be created", async () => {



        try {

            const addressSchema = z.object({
                cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

                nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

                numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999, { message: "Número muito grande!" }),

                user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" })

            })

            const dados = {
                "cep": "12345612",
                "cidade": "sorocaba do sul",
                "bairro": "camisas",
                "estado": "ma",
                "numero": 1234,
                "complemento": "perto da padaria",
                "user_id": 2
            }


            const parseResposta = addressSchema.safeParse(dados)

            if (!parseResposta.success) {
                const formatted = parseResposta.error.format()

                throw new AppError(formatted, 400)


            } else {
                console.log("else")

                const addressRepository = new AddressRepositoryInMemory()

                const userRepository = new UserRepository()

                const addressCreateService = new AddressCreateService(addressRepository, userRepository)

                const resposta = await addressCreateService.execute(dados)

            }
        } catch (error) {
            expect(error).toBeInstanceOf(AppError)
        }



    })
    it("endereco should not be created", async () => {

        try {
            const addressSchema = z.object({
                cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

                nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

                numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999, { message: "Número muito grande!" }),

                user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" })

            })

            const dados = {
                "cep": "12345612",
                "nome": "dom joao segundo junior terceiro",
                "bairro": "camisas",
                "estado": "ma",
                "numero": 1234,
                "complemento": "perto da padaria",
                "user_id": 2
            }

            const parseResposta = addressSchema.safeParse(dados)

            if (!parseResposta.success) {
                const formatted = parseResposta.error.format()

                throw new AppError(formatted, 400)


            } else {
                console.log("else")

                const addressRepository = new AddressRepositoryInMemory()

                const userRepository = new UserRepository()

                const addressCreateService = new AddressCreateService(addressRepository, userRepository)

                const resposta = await addressCreateService.execute(dados)

            }
        } catch (error) {
            expect(error).toBeInstanceOf(AppError)
        }


    })
    it("endereco should not be created", async () => {

        try {
            const addressSchema = z.object({
                cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

                nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(20, { message: "Texto muito grande!" }),

                cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(15, { message: "Texto muito grande!" }),

                estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

                numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999, { message: "Número muito grande!" }),

                user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" })

            })

            const dados = {
                "cep": "12345612",
                "nome": "dom joao segundo junior terceiro",
                "cidade": "sorocaba do sul",
                "estado": "ma",
                "numero": 1234,
                "complemento": "perto da padaria",
                "user_id": 2
            }

            const parseResposta = addressSchema.safeParse(dados)

            if (!parseResposta.success) {
                const formatted = parseResposta.error.format()

                throw new AppError(formatted, 400)


            } else {
                console.log("else")

                const addressRepository = new AddressRepositoryInMemory()

                const userRepository = new UserRepository()

                const addressCreateService = new AddressCreateService(addressRepository, userRepository)

                const resposta = await addressCreateService.execute(dados)

            }
        } catch (error) {
            expect(error).toBeInstanceOf(AppError)
        }

    })
    it("endereco should not be created", async () => {

        try {
            const addressSchema = z.object({
                cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

                nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

                numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999, { message: "Número muito grande!" }),

                user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" })

            })

            const dados = {
                "cep": "12345612",
                "nome": "dom joao segundo junior terceiro",
                "cidade": "sorocaba do sul",
                "bairro": "camisas",
                "numero": 1234,
                "complemento": "perto da padaria",
                "user_id": 2
            }
            const parseResposta = addressSchema.safeParse(dados)

            if (!parseResposta.success) {
                const formatted = parseResposta.error.format()

                throw new AppError(formatted, 400)


            } else {
                console.log("else")

                const addressRepository = new AddressRepositoryInMemory()

                const userRepository = new UserRepository()

                const addressCreateService = new AddressCreateService(addressRepository, userRepository)

                const resposta = await addressCreateService.execute(dados)

            }
        } catch (error) {
            expect(error).toBeInstanceOf(AppError)
        }


    })
    it("endereco should not be created", async () => {

        try {
            const addressSchema = z.object({
                cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

                nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

                numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999, { message: "Número muito grande!" }),

                user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" })

            })

            const dados = {
                "cep": "12345612",
                "nome": "dom joao segundo junior terceiro",
                "cidade": "sorocaba do sul",
                "bairro": "camisas",
                "estado": "ma",
                "complemento": "perto da padaria",
                "user_id": 2
            }

            const parseResposta = addressSchema.safeParse(dados)

            if (!parseResposta.success) {
                const formatted = parseResposta.error.format()

                throw new AppError(formatted, 400)


            } else {
                console.log("else")

                const addressRepository = new AddressRepositoryInMemory()

                const userRepository = new UserRepository()

                const addressCreateService = new AddressCreateService(addressRepository, userRepository)

                const resposta = await addressCreateService.execute(dados)

            }
        } catch (error) {
            expect(error).toBeInstanceOf(AppError)
        }


    })
    it("endereco should not be created", async () => {

        try {
            const addressSchema = z.object({
                cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

                nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

                numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999, { message: "Número muito grande!" }),

                user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" })

            })

            const dados = {
                "cep": "12345612",
                "nome": "dom joao segundo junior terceiro",
                "cidade": "sorocaba do sul",
                "bairro": "camisas",
                "estado": "ma",
                "numero": 1234,
                "complemento": "perto da padaria",
            }

            const parseResposta = addressSchema.safeParse(dados)

            if (!parseResposta.success) {
                const formatted = parseResposta.error.format()

                throw new AppError(formatted, 400)


            } else {
                console.log("else")

                const addressRepository = new AddressRepositoryInMemory()

                const userRepository = new UserRepository()

                const addressCreateService = new AddressCreateService(addressRepository, userRepository)

                const resposta = await addressCreateService.execute(dados)

            }
        } catch (error) {
            expect(error).toBeInstanceOf(AppError)
        }


    })
    it("endereco should not be created", async () => {

        try {
            const addressSchema = z.object({
                cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

                nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

                estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

                numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999, { message: "Número muito grande!" }),

                user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" })

            })

            const dados = {
                "cep": "1234561a",
                "nome": "dom joao segundo junior terceiro",
                "cidade": "sorocaba do sul",
                "bairro": "camisas",
                "estado": "ma",
                "numero": 1234,
                "complemento": "perto da padaria",
            }

            const parseResposta = addressSchema.safeParse(dados)

            if (!parseResposta.success) {
                const formatted = parseResposta.error.format()

                throw new AppError(formatted, 400)


            } else {
                console.log("else")

                const addressRepository = new AddressRepositoryInMemory()

                const userRepository = new UserRepository()

                const addressCreateService = new AddressCreateService(addressRepository, userRepository)

                const resposta = await addressCreateService.execute(dados)

            }
        } catch (error) {
            expect(error).toBeInstanceOf(AppError)
        }
    })


})
