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

        console.log(user)
        
        if (!user) {
            throw new AppError('usuario não encontrado')
          }

          const userWithUpdatedEmail = await this.userRepository.findByEmail(email)

      
          if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError('este email já está em uso.')
          }
          user[0].name = name || user[0].name
          user[0].email = email || user[0].email
      
          if (password && !old_password) {
            throw new AppError('Você precisa informar a senha antiga!')
          }
      
          if (password && old_password) {

            if(password == old_password){

              throw new AppError("as senha antiga e a senha nova nao podem ser iguais")
            }
            console.log(user[0])

            console.log(user[0].password)
            const checkOldPassword = await compare(old_password, user[0].password)

           
            if (!checkOldPassword) {
              throw new AppError(
                'Senha antiga não confere, insira novamente por gentileza!'
              )
            }
      
            user[0].password = await hash(password, 8)
          }
      
          await this.userRepository.update(user)
          return
    }
}
module.exports = UserUpdateService