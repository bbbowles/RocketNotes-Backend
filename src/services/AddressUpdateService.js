const AppError = require("../utils/AppError")

class AddressUpdateService {
    constructor(addressRepository, userRepository) {
        this.addressRepository = addressRepository
        this.userRepository = userRepository
    }
    async execute(dados) {

        let { cep, nome, cidade, bairro, estado, numero, complemento, user_id, id } = dados


        nome = nome.charAt(0).toUpperCase() + nome.slice(1)
        cidade = cidade.charAt(0).toUpperCase() + cidade.slice(1)
        bairro = bairro.charAt(0).toUpperCase() + bairro.slice(1)
        estado = estado.charAt(0).toUpperCase() + estado.slice(1)


        console.log("rodando update")


        const user = await this.userRepository.findById({ id: user_id })


        if (cep && String(cep).length == 8 && user) {
            console.log("validacao correta")
            try {
                await this.addressRepository.update({ cep, nome, cidade, bairro, estado, numero, complemento, user_id, id })

                console.log("endereco adicionado")

                return "Endereço atualizado com sucesso!"

            } catch {
                throw new AppError("Um erro interno ocorreu durante o update de dados")
            }
        } else {
            console.log("validacao erro")
            throw new AppError("Um dos dados recebidos esta errado! Dica: cep e/ou usuario")
        }






    }
}
module.exports = AddressUpdateService
