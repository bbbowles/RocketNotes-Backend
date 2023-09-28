const AppError = require("../utils/AppError")

class AddressUpdateService {
    constructor(addressRepository, userRepository) {
        this.addressRepository = addressRepository
        this.userRepository = userRepository
    }
    async execute(dados) {

        const { cep, nome, cidade, bairro, estado, numero, complemento, user_id, id } = dados

        if (cep && nome && cidade && bairro && estado && numero && user_id && id) {

                console.log("rodando update")

                const user = await this.userRepository.findById({ id: user_id })

                if (cep && String(cep).length == 8 && !isNaN(cep) && user) {
                    console.log("validacao correta")
                    try {
                        await this.addressRepository.update({ cep, nome, cidade, bairro, estado, numero, complemento, user_id, id })

                        console.log("endereco adicionado")

                        return "Endereço atualizado com sucesso!"

                    } catch {
                        throw new AppError("Um erro interno ocorreu durante o update de dados")
                    }
                }else{
                    console.log("validacao erro")
                    throw new AppError("Um dos dados recebidos esta errado! Dica: cep e/ou usuario")
                }
            }else {

                console.log("endereco nao adicionado")

                throw new AppError("Nem todos os dados necessarios foram recebidos!")
        }





    }
}
module.exports = AddressUpdateService
