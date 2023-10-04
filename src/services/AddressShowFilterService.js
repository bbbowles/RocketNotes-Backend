class AddressShowFilter{
    constructor(addressRepository, userRepository){
        this.addressRepository = addressRepository
        this.userRepository = userRepository
    }

    async execute(data){

        console.log(data)

        const {cep, nome, cidade, bairro, estado, numero} = data

        const resposta = await this.addressRepository.showFilter({
        cep: cep ? cep : "",
        nome: nome ? nome : "",
        cidade: cidade ? cidade : "",
        bairro: bairro ? bairro : "",
        estado: estado ? estado : "",
        numero: numero ? numero : ""
    })

        return resposta
    }
}
module.exports = AddressShowFilter
