const knex = require('../database/knex')

class CarsRepository{

    async index(){
        // const dbCars = await knex("cars").select("*")

        const dbCars = await knex("cars")
        .select(["cars.names", "cars.brand", "cars.year","users.name"])
        .innerJoin("users", "users.id", "cars.user_id")

        console.log(dbCars)

        return dbCars
    }
    async create({names,brand,year,user_id}){
        await knex("cars").insert({names,brand,year,user_id})

        return
    }
}

module.exports = CarsRepository