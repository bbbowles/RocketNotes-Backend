const { hash, compare } = require('bcryptjs')
const AppError = require('../utils/AppError')
const sqliteConnection = require('../database/sqlite')
const UserRepository = require("../repositories/UserRepository")
const UserCreateService = require("../services/UserCreateService")
const UserUpdateService = require("../services/UserUpdateService")
const UserShowService = require("../services/UserShowService")
const UserIndexService = require("../services/UserIndexService")


class UsersController {

  async create(request, response) {
    const { name, email, password } = request.body

    const userRepository = new UserRepository()

    const userCreateService = new UserCreateService(userRepository) 

    await userCreateService.execute({name, email, password})

    return response.status(201).json()
  }


  
  async update(request, response) {
    const { name, email, password, old_password } = request.body

    const userRepository = new UserRepository()

    const user = {
      id:request.user.id,
      name,
      email,
      password,
      old_password
    }


    const userUpdateService = new UserUpdateService(userRepository)

    await userUpdateService.execute(user)

    return response.json()
  }
  async show(request,response){
    const id = request.params.id
    console.log(id)

    const userRepository = new UserRepository()

    const userShowService = new UserShowService(userRepository)

    const resposta = await userShowService.execute(id)

    return response.json(resposta)
  }
  async index(request,response){
    const userRepository = new UserRepository()

    const userIndexService = new UserIndexService(userRepository)

    const resposta = await userIndexService.execute()

    return response.json(resposta)

  }
}

module.exports = UsersController
