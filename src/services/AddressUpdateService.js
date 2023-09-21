const AppError = require("../utils/AppError")

class AddressUpdateService {
    constructor(addressRepository, userRepository) {
        this.addressRepository = addressRepository
        this.userRepository = userRepository
    }
    async execute(dados) {

        const { cep, nome, cidade, bairro, estado, numero, complemento, user_id, id } = dados

        if (id) {

            if(user_id){
                const user = await this.userRepository.findById({ id: user_id })

                this.user = user


            }else{
                throw new AppError("nenhum id de usuario recebido")
            }


            if (cep) {
                if (cep && cep.length == 8 && !isNaN(cep) && this.user) {
                    try {
                        await this.addressRepository.update({ cep, nome, cidade, bairro, estado, numero, complemento, user_id, id })

                        return "Endereço atualizado com sucesso!"

                    } catch {
                        throw new AppError("Um erro interno ocorreu durante o update de dados")
                    }
                }
            }

            if (this.user) {

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
