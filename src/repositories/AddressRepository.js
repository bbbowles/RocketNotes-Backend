const knex = require('../database/knex')

class AddressRepository {
    async create({ cep, nome, cidade, bairro, estado, numero, complemento, user_id }) {
        await knex("enderecos").insert({ cep, nome, cidade, bairro, estado, numero, complemento, user_id })

        return
    }
    async index() {
        const addr = await knex("enderecos").select("enderecos.*", "users.name")
            .innerJoin("users", "users.id", "enderecos.user_id")
            .orderBy("id", "desc")

        const tmp = await knex("enderecos").count("*").first()

        const rowCount = tmp[`count(*)`]

        return { addr, rowCount }
    }
    async show(id) {
        console.log("repo id", id)


        const addr = await knex("enderecos").select("*").where("id", id).first()

        console.log("addr", addr)

        return addr
    }
    async delete(id) {
        await knex("enderecos").delete("*").where("id", id)

        return
    }
    async update({ cep, nome, cidade, bairro, estado, numero, complemento, user_id, id }) {
        console.log("informacoes update", cep, nome, cidade, bairro, estado, numero, complemento, user_id, id)
        await knex("enderecos").where("id", id).update({ cep, nome, cidade, bairro, estado, numero, complemento, user_id })

        return

    }
    async showFilter({ cep, nome, cidade, bairro, estado, numero, pages }) {
        console.log({ cep, nome, cidade, bairro, estado, numero, pages })

        const rows = await knex("enderecos")
        .join("users", "users.id", "=", "enderecos.user_id")
        .select("users.name", "enderecos.*")
        .whereLike("cep", `%${cep}%`)
        .whereLike("nome", `%${nome}%`)
        .whereLike("cidade", `%${cidade}%`)
        .whereLike("estado", `%${estado}%`)
        .whereLike("bairro", `%${bairro}%`)
        .whereLike("numero", `%${numero}%`)
        .limit(10).offset(pages)


        // const rows = await knex("enderecos")
        //     .select(["enderecos.*", "users.name"])
        //     .whereLike("cep", `%${cep}%`)
        //     .whereLike("nome", `%${nome}%`)
        //     .whereLike("cidade", `%${cidade}%`)
        //     .whereLike("estado", `%${estado}%`)
        //     .whereLike("bairro", `%${bairro}%`)
        //     .whereLike("numero", `%${numero}%`)
        //     .limit(10).offset(pages)
        //     .innerJoin('users', 'users.id', 'enderecos.user_id')
        // .first() nao pode usar first pq a pagina de address precisa receber um array

        //chegou todos undefined

        // const resposta2 = await knex("enderecos").select("*")
        // .whereLike("cep", `%${cep}%`)
        // .whereLike("nome", `%${nome}%`)
        // .whereLike("cidade", `%${cidade}%`)
        // .whereLike("estado", `%${estado}%`)
        // .whereLike("bairro", `%${bairro}%`)
        // .whereLike("numero", `%${numero}%`)
        // .limit(5).offset(pages)
        // .groupBy("id")
        // .having(knex.raw('count(id) > 1'))

        const count = await knex("enderecos")
            .count("id")
            .whereLike("cep", `%${cep}%`)
            .whereLike("nome", `%${nome}%`)
            .whereLike("cidade", `%${cidade}%`)
            .whereLike("estado", `%${estado}%`)
            .whereLike("bairro", `%${bairro}%`)
            .whereLike("numero", `%${numero}%`)
            .first()


        console.log({ rows, count })
        return { rows, count }
    }

    async indexPagination(pages) {
        console.log("pages", pages)
        const addr = await knex("enderecos")
            .select("enderecos.*")
            .limit(10).offset(pages)
            .leftJoin('users', 'users.id', 'enderecos.user_id')

        const tmp = await knex("enderecos").count("*").first()

        const rowCount = tmp[`count(*)`]


        return { addr, rowCount }
    }

}

module.exports = AddressRepository
