const AppError = require("../utils/AppError")
// const Capitalize = require("../utils/Capitalize")

class AddressCreateService {
    constructor(addressRepository, userRepository) {
        this.addressRepository = addressRepository
        this.userRepository = userRepository

    }
    async execute(dados) {
        let { cep, nome, cidade, bairro, estado, numero, complemento, user_id } = dados

        console.log({ cep, nome, cidade, bairro, estado, numero, complemento, user_id })

        const user = await this.userRepository.findById({id:user_id})

        console.log(user)


        nome = nome.charAt(0).toUpperCase() + nome.slice(1)
        cidade = cidade.charAt(0).toUpperCase() + cidade.slice(1)
        bairro = bairro.charAt(0).toUpperCase() + bairro.slice(1)
        estado = estado.charAt(0).toUpperCase() + estado.slice(1)



        if(cep && String(cep).length == 8 && user){
            console.log("cep e user certo")


            if ( cep && nome && cidade && bairro && estado && numero && user_id ){
                console.log("passou pela validacao")

                try {
                    this.addressRepository.create({ cep, nome, cidade, bairro, estado, numero, complemento, user_id })

                    return "endereço criado no banco de dados"
                } catch {
                    throw new AppError("Ocorreu um erro interno na criacao do endereço")
                }
            }else{
                console.log("é preciso informar todos os campos")
                throw new AppError("É preciso informar todos os campos")
            }
        }else{
            console.log("Uma ou mais informação estão erradas. Dica: CEP ou usuário")
            throw new AppError("Uma ou mais informação estão erradas. Dica: CEP ou usuário")
        }




    }
}

module.exports = AddressCreateService
