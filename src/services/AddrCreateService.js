const AppError = require("../utils/AppError")

class AddrCreateService {
    constructor(addrRepository) {
        this.addrRepository = addrRepository
    }
    async execute(dados) {

        const { cep, nome, cidade, bairro, estado, numero, complemento, user_id } = dados

        if ( cep && nome && cidade && bairro && estado && numero && user_id ){
            
            try {
                this.addrRepository.create({ cep, nome, cidade, bairro, estado, numero, complemento, user_id })

                return "endereço criado no banco de dados"
            } catch {
                throw new AppError("Ocorreu um erro interno na criacao do endereço")
            }
        }else{
            throw new AppError("É preciso informar todos os campos")
        }

    }
}

module.exports = AddrCreateService