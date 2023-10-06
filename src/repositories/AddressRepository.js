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
    async showFilter({cep, nome, cidade, bairro, estado, numero}){
        console.log({cep, nome, cidade, bairro, estado, numero})
        const resposta = await knex("enderecos").select("*")
        .whereLike("cep", `%${cep}%`)
        .whereLike("nome", `%${nome}%`)
        .whereLike("cidade", `%${cidade}%`)
        .whereLike("estado", `%${estado}%`)
        .whereLike("bairro", `%${bairro}%`)
        .whereLike("numero", `%${numero}%`)
        // .first() nao pode usar first pq a pagina de address precisa receber um array

        //chegou todos undefined

        console.log("respsota",resposta)

        return resposta
    }

    async indexPagination(pages){
        const addr = await knex("enderecos")
        .select("*")
        .limit(5).offset(pages)

        const tmp = await knex("enderecos").count("*").first()

        const rowCount = tmp[`count(*)`]

        console.log(rowCount)

        return {addr,rowCount}
    }

}

module.exports = AddressRepository
