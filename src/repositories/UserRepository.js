const sqliteConnection = require("../database/sqlite")
const knex = require('../database/knex')

class UserRepository {
    async findByEmail(email) {
        console.log("recebemos", email)

        const user = await knex("users").select("*").where("email", email).first()



        return user
    }
    async create({ name, email, password }) {


        const userId = await knex("users").insert({ name, email, password })

        return { id: userId }
    }
    async findById(id) {
        console.log(id)

        const dbUser = await knex("users").select("*").where("id", id).first()

        return dbUser
    }
    async update(user) {
        console.log("user", user)

        const { name, email, password, id } = user[0]

        const resultado = await knex("users").update({ name, email, password }).where("id", id)

        console.log(resultado)

        return resultado
    }
    async index() {

        const users = await knex("users").select("name", "id")

        console.log(users)

        return users
    }


}
module.exports = UserRepository