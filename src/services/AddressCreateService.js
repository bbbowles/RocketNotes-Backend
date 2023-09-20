const AppError = require("../utils/AppError")

class AddressCreateService {
    constructor(AddressRepository) {
        this.AddressRepository = AddressRepository
    }
    async execute(dados) {

        const { cep, nome, cidade, bairro, estado, numero, complemento, user_id } = dados

        if(cep.length == 8 && !isNaN(cep)){

            console.log(isNaN(cep))

            if ( cep && nome && cidade && bairro && estado && numero && user_id ){
            
                try {
                    this.AddressRepository.create({ cep, nome, cidade, bairro, estado, numero, complemento, user_id })
    
                    return "endereço criado no banco de dados"
                } catch {
                    throw new AppError("Ocorreu um erro interno na criacao do endereço")
                }
            }else{
                throw new AppError("É preciso informar todos os campos")
            }
        }else{
            throw new AppError("O valor digitado não condiz com um CEP valido")
        }


      

    }
}

module.exports = AddressCreateService