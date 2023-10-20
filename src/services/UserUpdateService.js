const sqliteConnection = require("../database/sqlite")
const {compare, hash} = require("bcryptjs");
const AppError = require("../utils/AppError");

class UserUpdateService{
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async execute(data){
        const {id,email,name,password,old_password} = data
        const user = await this.userRepository.findById(id)


        if (!user) {
            throw new AppError('usuario não encontrado')
          }

          const userWithUpdatedEmail = await this.userRepository.findByEmail(email)

          console.log("id",userWithUpdatedEmail, user)

          if (userWithUpdatedEmail && userWithUpdatedEmail.id != user.id) {
            throw new AppError('este email já está em uso.')
          }
          console.log("passou na validacao do email")
          user.name = name || user.name
          user.email = email || user.email

          if (password && !old_password) {
            throw new AppError('Você precisa informar a senha antiga!')
          }

          if (password && old_password) {

            if(password == old_password){

              throw new AppError("as senha antiga e a senha nova nao podem ser iguais")
            }
            console.log(user)

            console.log(user.password)
            const checkOldPassword = await compare(old_password, user.password)


            if (!checkOldPassword) {
              throw new AppError(
                'Senha antiga não confere, insira novamente por gentileza!'
              )
            }

            user.password = await hash(password, 8)
          }

          await this.userRepository.update(user)
          return
    }
}
module.exports = UserUpdateService
