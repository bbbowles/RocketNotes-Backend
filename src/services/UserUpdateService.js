const { database } = require("sqlite");
const sqliteConnection = require("../database/sqlite")
const {compare, hash} = require("bcryptjs");
const AppError = require("../utils/AppError");
const UserRepository = require("../repositories/UserRepository")

class UserUpdateService{
    constructor(userRepository){
        this.userRepository = userRepository
        //globaliza a instancia do userRepository
    }
    async fillWhereNull(user, dbUser){
        console.log("cheguei no fill")
        Object.keys(user).forEach(function(value) {
            if(user[value] === null) {
                let tmp = [value]
                user[value] = dbUser[tmp];
              console.log(user)
            }return user 
        })
    }

    async execute({user}){ //precisamos receber entre chaves, por que?
        console.log(user)
        const dbUser = await this.userRepository.findById(user.id)
        console.log("dbuser", dbUser)
        if(user.password){

            const res = await compare(user.old_password, dbUser.password)
            console.log(res)

                if(res){
                    try{

                        const hashedPassword = await hash(user.password,8)

                        user.password = hashedPassword

                        const userNotNull = fillWhereNull(user, dbUser)

                        console.log(userNotNull)

                        
                        const results = await this.userRepository.update(userNotNull)

                        console.log(results)
                        
                        return
                            
                    }catch{
                        throw new AppError("erro ao inserir",500) //por que o return n funcionou
                    }
                }else{
                    throw new AppError("senhas nao batem",500)
                }
                
            }else{

            }

    }
}
module.exports = UserUpdateService