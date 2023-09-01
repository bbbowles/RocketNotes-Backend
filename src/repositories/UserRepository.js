const sqliteConnection = require("../database/sqlite")

class UserRepository{
  async findByEmail(email){
      console.log("recebemos",email)
      const database = await sqliteConnection()
      const user = await database.get("SELECT * FROM users WHERE email = (?)",[email])
      
      return user
  }
  async create({name, email, password}){
      const database = await sqliteConnection()
      const userId = await database.run(
          'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
          [name, email, password]
        )    
      return {id:userId}
  }
  async findById(id){
      const database = await sqliteConnection()
      const dbUser = await database.get("SELECT * FROM users WHERE id = (?)",[id])
      return dbUser
  }
  async update(user){
      console.log("user",user)
      const database = await sqliteConnection()
      const resultado = await database.run(
        `
         UPDATE users SET
         name = ?,
         email = ?,
         password = ?,
         updated_at = DATETIME('now')
         WHERE id = ?`,
        [user.name, user.email, user.password, user.id]
      )
      return resultado
  }

  
}
module.exports= UserRepository