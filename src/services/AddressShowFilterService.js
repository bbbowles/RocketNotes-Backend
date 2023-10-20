class AddressShowFilter{
    constructor(addressRepository, userRepository){
        this.addressRepository = addressRepository
        this.userRepository = userRepository
    }

    async execute(data){

        console.log(data)

        let {cep, nome, cidade, bairro, estado, numero, pages} = data

        pages = Number(pages)*5

        const resposta = await this.addressRepository.showFilter({
        cep: cep ? cep : "",
        nome: nome ? nome : "",
        cidade: cidade ? cidade : "",
        bairro: bairro ? bairro : "",
        estado: estado ? estado : "",
        numero: numero ? numero : "",
        pages
    })

        return resposta
    }
}
module.exports = AddressShowFilter
