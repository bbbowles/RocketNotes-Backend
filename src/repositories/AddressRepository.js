const knex = require('../database/knex')

class AddressRepository {
    async create({ cep, nome, cidade, bairro, estado, numero, complemento, user_id }) {
        await knex("enderecos").insert({ cep, nome, cidade, bairro, estado, numero, complemento, user_id })

        return
    }
    async index() {
        const addr = await knex("enderecos").select("enderecos.*", "users.name")
        .innerJoin("users", "users.id", "enderecos.user_id")
        .orderBy("id","desc")

        return addr
    }
    async show(id) {
        const addr = await knex("enderecos").select("*").where("id", id).first()

        return addr
    }
    async delete(id) {
        await knex("enderecos").delete("*").where("id", id)

        return
    }
    async update({ cep, nome, cidade, bairro, estado, numero, complemento, user_id, id }) {
        await knex("enderecos").where("id", id).update({ cep, nome, cidade, bairro, estado, numero, complemento, user_id })

        return

    }
    async showUser({ id }) {
        console.log(id)

        const dbUser = await knex("users").select("*").where("id", id).first()

        console.log(dbUser)

        return dbUser
    }

}

module.exports = AddressRepository
