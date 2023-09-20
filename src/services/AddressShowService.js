const AppError = require("../utils/AppError")

class AddressShowService {
    constructor(addressRepository) {
        this.addressRepository = addressRepository
    }

    async execute(id) {
        let addr
        try {
            addr = await this.addressRepository.show(id)

        }catch {
            throw new AppError("Um erro interno aconteceu")
        }


        if (!addr) {
            throw new AppError("Este endereco não existe")
        } else {
            return addr

        }
    }
}
module.exports = AddressShowService