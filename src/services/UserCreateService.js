const { hash } = require('bcryptjs')
const AppError = require('../utils/AppError')

class UserCreateService {

    constructor(userRepository) {
        this.userRepository = userRepository
        console.log("output userrepo", userRepository)

    }


    async execute({ name, email, password }) {

        console.log({ name, email, password })

        if ( name || email || password) {

            const checkUserExists = await this.userRepository.findByEmail(email)

            console.log("checkuserexist", checkUserExists)

            if (checkUserExists[0]) {
                throw new AppError('Email em uso')
            }


            const hashedPassword = await hash(password, 8)
            const userCreated = await this.userRepository.create({ name, email, password: hashedPassword })


            console.log(userCreated)

            return userCreated

        } else {
            throw new AppError("nome, email e/ou senha nao informadas")

        }

    }
}

module.exports = UserCreateService