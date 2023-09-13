const NotesRepository = require("../repositories/NotesRepository")
const NotesCreateService = require("../services/NotesCreateService")
const NotesShowService = require("../services/NotesShowService")
const NotesDeleteService = require("../services/NotesDeleteService")
const NotesIndexService = require("../services/NotesIndexService")

class NotesController {
  async create(request, response) {
    const { title, description, tags, links } = request.body
    const user_id = request.user.id

    const notesRepository = new NotesRepository()

    const notesCreateService = new NotesCreateService(notesRepository)

    await notesCreateService.execute({ title, description, tags, links, user_id})


    return response.json()
  }

  async show(request, response) {

    const notesRepository = new NotesRepository()

    const notesShowService = new NotesShowService(notesRepository)
    
    const resultado = await notesShowService.execute({id:request.params.id})

    const {note,tags,links} = resultado

    console.log(note,"notedocontroller")

    const resultado2 = response.json({ //por que response.json
      ...note,
      tags,
      links
    })

    

   
    return resultado2
  }

  async delete(request, response) {

    const notesRepository = new NotesRepository()

    const notesDeleteService = new NotesDeleteService(notesRepository)
    
    await notesDeleteService.execute({id:request.params.id})


    return response.json({ message: 'Note delete completed' })
  }

  async index(request, response) {
    const { title, tags } = request.query
    const user_id = request.user.id

    const notesRepository = new NotesRepository()

    const notesIndexService = new NotesIndexService(notesRepository)
    
    const notesWithTags = await notesIndexService.execute({title, tags, user_id})


    return response.json(notesWithTags)
  }
}

module.exports = NotesController
