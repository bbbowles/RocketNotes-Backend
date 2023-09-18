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
    async index(){
        const users=[
            {
                "name": "test"
            },
            {
                "name": "test2"
            }
        ]

        return users
    }
    async findById(id){

        const resultado=[
            {
                "id": 1,
                "name": "admin",
                "email": "admin",
                "password": "$2a$08$Ho.TfIKtObizTl0PgPnFf.UYRSHOCtrzHYg9WGtcQXKik3tXK6rZa",
                "avatar": null,
                "created_at": "2023-09-11 19:18:19",
                "updated_at": "2023-09-11 19:18:19"
            }
        ]

        return resultado
    }

}

module.exports = UserRepositoryInMemory