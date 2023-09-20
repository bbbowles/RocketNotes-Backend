const AppError = require("../utils/AppError")

class AddrUpdateService {
    constructor(addrRepository) {
        this.addrRepository = addrRepository
    }
    async execute(dados) {

        const { cep, nome, cidade, bairro, estado, numero, complemento, user_id, id } = dados

        try {
            await this.addrRepository.update({ cep, nome, cidade, bairro, estado, numero, complemento, user_id, id })

            return "Endereço atualizado com sucesso!"

        }catch{
            throw new AppError("Um erro interno ocorreu durante o update de dados")
        }



    }
}
module.exports = AddrUpdateService