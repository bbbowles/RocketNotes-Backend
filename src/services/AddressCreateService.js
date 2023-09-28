const AppError = require("../utils/AppError")
// const Capitalize = require("../utils/Capitalize")

class AddressCreateService {
    constructor(addressRepository, userRepository) {
        this.addressRepository = addressRepository
        this.userRepository = userRepository

    }
    async execute(dados) {
        let { cep, nome, cidade, bairro, estado, numero, complemento, user_id } = dados

        const user = await this.userRepository.findById({id:user_id})

        // const resultado = Capitalize.execute(nome)

        nome = nome.charAt(0).toUpperCase() + nome.slice(1)
        cidade = cidade.charAt(0).toUpperCase() + cidade.slice(1)
        bairro = bairro.charAt(0).toUpperCase() + bairro.slice(1)
        estado = estado.charAt(0).toUpperCase() + estado.slice(1)

        if(cep && String(cep).length == 10 && user){


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
