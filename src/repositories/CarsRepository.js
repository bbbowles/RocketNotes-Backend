const knex = require('../database/knex')

class CarsRepository {

    async index() {
        // const dbCars = await knex("cars").select("*")

        const dbCars = await knex("cars")
            .select(["cars.id", "cars.names", "cars.brand", "cars.year", "users.name"])
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
        const dbCar = await knex("cars").select("*").where("id", id)

        return dbCar
    }
    async update({ name, brand, year, user_id, id }) {
        await knex("cars").where("id", id).update({ names: name, brand, year, user_id })

        return
    }
}

module.exports = CarsRepository