const AppError = require("../utils/AppError")

class AddressIndexService {
    constructor(addressRepository) {
        this.addressRepository = addressRepository
    }

    async execute() {
        try {
            const addr = this.addressRepository.index()

            return addr
        }catch{
            throw new AppError("Não foi possível ver o index dos endereços devido a um erro interno")
        }

    }
}
module.exports = AddressIndexService
