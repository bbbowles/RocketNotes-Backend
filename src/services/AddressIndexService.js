const AppError = require("../utils/AppError")

class AddrIndexService {
    constructor(addrRepository) {
        this.addrRepository = addrRepository
    }

    async execute() {
        try {
            const addr = this.addrRepository.index()

            return addr
        }catch{
            throw new AppError("Não foi possível ver o index dos endereços devido a um erro interno")
        }

    }
}
module.exports = AddrIndexService