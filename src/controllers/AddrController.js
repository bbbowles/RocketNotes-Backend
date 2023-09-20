const AddrRepository = require ("../repositories/AddrRepository")
const AddrCreateService = require ("../services/AddressCreateService")
const AddrIndexService = require ("../services/AddressIndexService")
const AddrShowService = require("../services/AddressShowService")
const AddrDeleteService = require("../services/AddressDeleteService")
const AddrUpdateService = require("../services/AddressUpdateService")


class AddrController{
    async create(request,response){
        const dados = request.body

        const addrRepository = new AddrRepository()

        const addrCreateService = new AddrCreateService(addrRepository)

        const resposta = await addrCreateService.execute(dados)

        return response.json(resposta)

        
    }

    async index(request,response){

        const addrRepository = new AddrRepository()

        const addrIndexService = new AddrIndexService(addrRepository)

        const resposta = await addrIndexService.execute()

        return response.json(resposta)

    }

    async show(request,response){

        const {id} = request.params

        const addrRepository = new AddrRepository()

        const addrShowService = new AddrShowService(addrRepository)

        const resposta = await addrShowService.execute(id)

        return response.json(resposta)
    }
    
    async delete(request,response){

        const {id} = request.params

        const addrRepository = new AddrRepository()

        const addrDeleteService = new AddrDeleteService(addrRepository)

        const resposta = await addrDeleteService.execute(id)

        return response.json(resposta)

    }
    
    async update(request,response){

        const dados = request.body

        const {id} = request.params

        dados.id = id

        const addrRepository = new AddrRepository()

        const addrUpdateService = new AddrUpdateService(addrRepository)

        const resposta = await addrUpdateService.execute(dados)

        return response.json(resposta)

    }
}

module.exports = AddrController