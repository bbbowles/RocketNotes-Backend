const AppError = require("../utils/AppError")

class UserShowService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    async execute(id) {
        console.log("user show service",id)

        if (!id) {
            throw new AppError("id nao informado")

        } else {
            const resposta = await this.userRepository.findById(id)

            if (resposta.length == 0) {
                throw new AppError("Usuario nao existe")
            } else {
                return resposta

            }
        }


    }
}
module.exports = UserShowService