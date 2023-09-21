const AppError = require("../utils/AppError")

class AddressCreateService {
    constructor(addressRepository, userRepository) {
        this.addressRepository = addressRepository
        this.userRepository = userRepository

    }
    async execute(dados) {

        const { cep, nome, cidade, bairro, estado, numero, complemento, user_id } = dados

        const user = await this.userRepository.findById({id:user_id})

        if(cep && cep.length == 8 && !isNaN(cep) && user){


            if ( cep && nome && cidade && bairro && estado && numero && user_id ){

                try {
                    this.addressRepository.create({ cep, nome, cidade, bairro, estado, numero, complemento, user_id })

                    return "endereço criado no banco de dados"
                } catch {
                    throw new AppError("Ocorreu um erro interno na criacao do endereço")
                }
            }else{
                throw new AppError("É preciso informar todos os campos")
            }
        }else{
            throw new AppError("Uma ou mais informação estão erradas")
        }




    }
}

module.exports = AddressCreateService
