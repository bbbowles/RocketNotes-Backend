const AppError = require("../utils/AppError")

class AddressUpdateService {
    constructor(addressRepository) {
        this.addressRepository = addressRepository
    }
    async execute(dados) {

        const { cep, nome, cidade, bairro, estado, numero, complemento, user_id, id } = dados

        if (id) {

            const user = await this.addressRepository.showUser({ id: user_id })


            if (cep.length == 8 && !isNaN(cep) && user) {

                try {
                    await this.addressRepository.update({ cep, nome, cidade, bairro, estado, numero, complemento, user_id, id })

                    return "Endereço atualizado com sucesso!"

                } catch {
                    throw new AppError("Um erro interno ocorreu durante o update de dados")
                }
            } else {
                throw new AppError("O cep digitado não é valido")
            }
        } else {
            throw new AppError("Id invalido!")
        }





    }
}
module.exports = AddressUpdateService