const AddressRepository = require ("../repositories/AddressRepository")
const AddressCreateService = require ("../services/AddressCreateService")
const AddressIndexService = require ("../services/AddressIndexService")
const AddressShowService = require("../services/AddressShowService")
const AddressDeleteService = require("../services/AddressDeleteService")
const AddressUpdateService = require("../services/AddressUpdateService")


class AddressController{
    async create(request,response){
        const dados = request.body

        console.log(dados)

        const addressRepository = new AddressRepository()

        const addressCreateService = new AddressCreateService(addressRepository)

        const resposta = await addressCreateService.execute(dados)

        return response.json(resposta)

        
    }

    async index(request,response){

        const addressRepository = new AddressRepository()

        const addressIndexService = new AddressIndexService(addressRepository)

        const resposta = await addressIndexService.execute()

        return response.json(resposta)

    }

    async show(request,response){

        const {id} = request.params

        const addressRepository = new AddressRepository()

        const addressShowService = new AddressShowService(addressRepository)

        const resposta = await addressShowService.execute(id)

        return response.json(resposta)
    }
    
    async delete(request,response){

        const {id} = request.params

        const addressRepository = new AddressRepository()

        const addressDeleteService = new AddressDeleteService(addressRepository)

        const resposta = await addressDeleteService.execute(id)

        return response.json(resposta)

    }
    
    async update(request,response){

        const dados = request.body

        const {id} = request.params

        dados.id = id

        const addressRepository = new AddressRepository()

        const addressUpdateService = new AddressUpdateService(addressRepository)

        const resposta = await addressUpdateService.execute(dados)

        return response.json(resposta)

    }
}

module.exports = AddressController