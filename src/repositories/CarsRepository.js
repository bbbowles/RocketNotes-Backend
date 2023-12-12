const knex = require('../database/knex')

class CarsRepository {

    async index( names, brand, year, nome) {

        console.log(names, brand, year, nome)

        const dbCars = await knex("cars")
            .select(["cars.id", "cars.names", "cars.brand", "cars.year", "users.name"])
            .whereLike("cars.names",`%${names}%`)
            .whereLike("cars.brand",`%${brand}%`)
            .whereLike("cars.year",`%${year}%`)
            .whereLike("users.name",`%${nome}%`)
            .innerJoin("users", "users.id", "cars.user_id")

        console.log(dbCars)

        return dbCars
    }
    async create({ names, brand, year, user_id }) {
        await knex("cars").insert({ names, brand, year, user_id })

        return
    }
    async delete(id) {
        await knex("cars").delete("*").where("id", id)

        return
    }
    async show(id) {
        const dbCar = await knex("cars").select("*").where("id", id).first()

        return dbCar
    }
    async update({ names, brand, year, user_id, id }) {
        console.log({ names, brand, year, user_id, id })
        await knex("cars").where("id", id).update({ names, brand, year, user_id })

        return
    }
}

module.exports = CarsRepository
