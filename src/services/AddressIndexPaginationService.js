const AppError = require("../utils/AppError")

class AddressIndexPaginationService{
    constructor(addressRepository){
        this.addressRepository = addressRepository
    }

    async execute(pages){
        try{
            const addr = this.addressRepository.indexPagination(pages)

            return addr
        }catch{
            throw new AppError("algum erro inteiro ocorreu",500)
        }
    }
}

module.exports = AddressIndexPaginationService
