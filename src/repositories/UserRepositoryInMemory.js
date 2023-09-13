class UserRepositoryInMemory{
    users = []

    async create({email, name, password}){
        const user={
            id:Math.floor(Math.random() * 1000) + 1,
            email, 
            name,
            password
        }

        console.log("passou pelo user repo")
    this.users.push(user)

        return user
    }

    async findByEmail(email){

        const resultado=[]

        return resultado
    }

}

module.exports = UserRepositoryInMemory