const knex = require('../database/knex')

class UserRepository {
    async findByEmail(email) {
        console.log("recebemos", email)

        const user = await knex("users").select("*").where("email", email).first()

        console.log("dbuser",user)

        return user
    }
    async create({ name, email, password }) {


        const userId = await knex("users").insert({ name, email, password })

        return { id: userId }
    }
    async findById({id}) {
        console.log(id,"id do finbyid")
        const dbUser = await knex("users").select("*").where("id", id).first()



        console.log("finbyid",dbUser)

        return dbUser
    }
    async update(user) {
        console.log("user", user)

        const { name, email, password, id } = user

        const resultado = await knex("users").update({ name, email, password }).where("id", id)

        console.log(resultado)

        return resultado
    }
    async index() {

        const users = await knex("users").select("name", "id")

        return users
    }


}
module.exports = UserRepository
