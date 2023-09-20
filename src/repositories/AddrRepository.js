const knex = require('../database/knex')

class AddrRepository {
    async create({ cep, nome, cidade, bairro, estado, numero, complemento, user_id }) {
        await knex("enderecos").insert({ cep, nome, cidade, bairro, estado, numero, complemento, user_id })

        return
    }
    async index() {
        const addr = await knex("enderecos").select("*")

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
        await knex("enderecos").where("id",id).update({ cep, nome, cidade, bairro, estado, numero, complemento, user_id })

        return

    }

}

module.exports = AddrRepository