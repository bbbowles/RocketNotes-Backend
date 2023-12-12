class AddressShowFilter{
    constructor(addressRepository, userRepository){
        this.addressRepository = addressRepository
        this.userRepository = userRepository
    }

    async execute(data){

        function isZero(pages){
            if(pages==0 || pages<0){
                return true
            }else{
                return false
            }
        }

        console.log(data)

        let {cep, nome, cidade, bairro, estado, numero, pages} = data

        console.log(pages)

        pages = Number(isZero(pages) ? pages : pages - 1)*10

        console.log(pages)

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
