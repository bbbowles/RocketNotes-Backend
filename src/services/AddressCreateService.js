const AppError = require("../utils/AppError")

class AddressCreateService {
    constructor(addressRepository) {
        this.addressRepository = addressRepository
    }
    async execute(dados) {

        const { cep, nome, cidade, bairro, estado, numero, complemento, user_id } = dados

        const user = await this.addressRepository.showUser({id:user_id})

        if(cep.length == 8 && !isNaN(cep) && user){

            console.log(isNaN(cep))

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