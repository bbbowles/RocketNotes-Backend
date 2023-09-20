class AddrUpdateService{
    constructor(addrRepository){
        this.addrRepository = addrRepository
    }
    async execute(dados){

        const { cep, nome, cidade, bairro, estado, numero, complemento, user_id, id } = dados

        await this.addrRepository.update({ cep, nome, cidade, bairro, estado, numero, complemento, user_id, id })

        return
    }
}
module.exports = AddrUpdateService