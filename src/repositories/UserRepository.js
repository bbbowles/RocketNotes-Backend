const sqliteConnection = require("../database/sqlite")
const knex = require('../database/knex')

class UserRepository{
  async findByEmail(email){
      console.log("recebemos",email)
      // const database = await sqliteConnection()
      // const user = await database.get("SELECT * FROM users WHERE email = (?)",[email])

      const user = await knex("users").select("*").where("email",email)

      

      return user
  }
  async create({name, email, password}){
      // const database = await sqliteConnection()
      // const userId = await database.run(
      //     'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      //     [name, email, password]
      //   )    

      const userId = await knex("users").insert({name, email, password})

      return {id:userId}
  }
  async findById(id){
      // const database = await sqliteConnection()
      // const dbUser = await database.get("SELECT * FROM users WHERE id = (?)",[id])

      const dbUser = await knex("users").select("*").where("id",id)

      return dbUser
  }
  async update(user){
      console.log("user",user)


      const {name, email, password, id} = user[0]

      // const resultado = await database.run(
      //   `
      //    UPDATE users SET
      //    name = ?,
      //    email = ?,
      //    password = ?,
      //    updated_at = DATETIME('now')
      //    WHERE id = ?`,
      //   [user.name, user.email, user.password, user.id]
      // )

        const resultado = await knex("users").update({name,email,password}).where("id",id)

      console.log(resultado)

      return resultado
  }

  
}
module.exports= UserRepository