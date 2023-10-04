class AddressRepositoryInMemory {
    async create(dados) {

        return
    }
    async index() {
        const addr = [
            {
                "id": 1,
                "cep": 123456789,
                "nome": "dom joao segundo junior",
                "cidade": "sorocaba do sul",
                "bairro": "meias",
                "estado": "aracuja",
                "numero": 1337,
                "complemento": "perto da padaria",
                "user_id": 1
            },
            {
                "id": 2,
                "cep": 123456123,
                "nome": "dom joao segundo junior terceiro",
                "cidade": "sorocaba do sul",
                "bairro": "camisas",
                "estado": "maracuja",
                "numero": 1234,
                "complemento": "perto da padaria",
                "user_id": 2
            }
        ]

        return addr
    }
    async show(id) {
        const addr = {
            "id": 1,
            "cep": 123456789,
            "nome": "dom joao segundo junior",
            "cidade": "sorocaba do sul",
            "bairro": "meias",
            "estado": "aracuja",
            "numero": 1337,
            "complemento": "perto da padaria",
            "user_id": 1
        }
        return addr
    }

    async delete(id) {
        return "Endereço deletado com sucesso"
    }

    async update({ cep, nome, cidade, bairro, estado, numero, complemento, user_id, id }) {
        return

    }
}

module.exports = AddressRepositoryInMemory
