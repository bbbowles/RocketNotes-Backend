const AddressRepository = require("../repositories/AddressRepository")
const UserRepository = require("../repositories/UserRepository")


const AddressCreateService = require("../services/AddressCreateService")
const AddressIndexService = require("../services/AddressIndexService")
const AddressShowService = require("../services/AddressShowService")
const AddressDeleteService = require("../services/AddressDeleteService")
const AddressUpdateService = require("../services/AddressUpdateService")
const AddressShowFilterService = require("../services/AddressShowFilterService")
const AddressIndexPaginationService = require("../services/AddressIndexPaginationService")
const AppError = require("../utils/AppError")

const z = require('zod')



class AddressController {
    async create(request, response) {
        const dados = request.body

        const addressSchema = z.object({
            cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

            nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

            cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

            bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

            estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

            numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999, { message: "Número muito grande!" }),

            user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" })

        })
        const parseResposta = addressSchema.safeParse(dados)

        if (!parseResposta.success) {
            const formatted = parseResposta.error.format()

            throw new AppError(formatted, 400)

        } else {


            console.log(dados)

            const addressRepository = new AddressRepository()

            const userRepository = new UserRepository()

            const addressCreateService = new AddressCreateService(addressRepository, userRepository)

            const resposta = await addressCreateService.execute(dados)

            return response.json(resposta)

        }

    }

    async index(request, response) {

        const { pages } = request.params
        console.log(pages)
        //pagination

        const addressRepository = new AddressRepository()

        const addressIndexService = new AddressIndexService(addressRepository)

        const resposta = await addressIndexService.execute(pages)

        return response.json(resposta)

    }

    async show(request, response) {

        const { id } = request.params

        const addressRepository = new AddressRepository()

        const addressShowService = new AddressShowService(addressRepository)

        const resposta = await addressShowService.execute(id)

        return response.json(resposta)
    }

    async delete(request, response) {

        const { id } = request.params

        const addressRepository = new AddressRepository()

        const addressDeleteService = new AddressDeleteService(addressRepository)

        const resposta = await addressDeleteService.execute(id)

        return response.json(resposta)

    }

    async update(request, response) {

        const dados = request.body

        const { id } = request.params

        dados.id = Number(id)


        const addressSchema = z.object({
            cep: z.string().length(8, { message: "Um cep deve ter exatamente 8 números" }),

            nome: z.string().min(3, { message: "Digite um nome de pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

            cidade: z.string().min(3, { message: "O nome da cidade deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

            bairro: z.string().min(3, { message: "O nome do bairro deve ter pelomenos 3 caracteres" }).max(30, { message: "Texto muito grande!" }),

            estado: z.string().length(2, { message: "O estado deve ser escrito em sigla, apenas 2 caracteres permitidos" }),

            numero: z.number().int().gte(1, { message: "O número da casa deve ser maior que zero" }).lte(9999, { message: "Número muito grande!" }),

            user_id: z.number().int().gte(1, { message: "O user id deve ser maior que zero" }),

            id: z.number().int().gte(1, { message: "id do endereco precisa ser maior ou igual a 1" })

        })

        const parseResposta = addressSchema.safeParse(dados)

        if (!parseResposta.success) {
            const formatted = parseResposta.error.format()

            throw new AppError(formatted, 400)
        } else {


            const addressRepository = new AddressRepository()

            const userRepository = new UserRepository()

            const addressUpdateService = new AddressUpdateService(addressRepository, userRepository)

            const resposta = await addressUpdateService.execute(dados)

            return response.json(resposta)
        }


    }
    async showFilter(request, response) {

        const { cep, nome, cidade, bairro, estado, numero, pages } = request.query

        console.log("controller", { cep, nome, cidade, bairro, estado, numero, pages })

        const addressRepository = new AddressRepository()

        const userRepository = new UserRepository()

        const addressShowFilterService = new AddressShowFilterService(addressRepository, userRepository)

        const data = await addressShowFilterService.execute({ cep, nome, cidade, bairro, estado, numero, pages })

        return response.json(data)
    }

    async indexPagination(request, response) {

        let { pages } = request.params

        pages = pages * 5

        const addressRepository = new AddressRepository()

        const userRepository = new UserRepository()

        const addressIndexPaginationService = new AddressIndexPaginationService(addressRepository, userRepository)

        const addr = await addressIndexPaginationService.execute(pages)

        return response.json(addr)

    }

}

module.exports = AddressController
