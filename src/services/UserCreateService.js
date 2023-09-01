const { hash} = require('bcryptjs')
const AppError = require('../utils/AppError')

class UserCreateService{

    constructor(userRepository){
        this.userRepository = userRepository
        console.log("output userrepo",userRepository)
        //isso so globaliza a const? (a parte que comeca com this sim)
        //nao tem importacao? (importacao ocorre pelo userController?)
        //constructor ta pedindo de referencia o userRepository? (sim)
    }


    async execute({name, email, password}){


        const checkUserExists = await this.userRepository.findByEmail(email)

        if (checkUserExists) {
            throw new AppError('Email em uso')
        }

        const hashedPassword = await hash(password, 8)
 
        const userCreated = await this.userRepository.create({name, email, password:hashedPassword})
        
        console.log(userCreated)

        return userCreated
    }
}

module.exports = UserCreateService