const AppError = require("../utils/AppError")

class AddrShowService {
    constructor(addrRepository) {
        this.addrRepository = addrRepository
    }

    async execute(id) {
        let addr
        try {
            addr = await this.addrRepository.show(id)

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
module.exports = AddrShowService