const NotesCreateService = require("./NotesCreateService")
const NotesRepositoryInMemory = require("../repositories/NotesRepositoryInMemory")
const AppError = require("../utils/AppError")

describe("NotesCreateService", ()=>{
    it("a note should be created", async ()=>{
        const noteData = {
            "title":"Titulo teste",
            "description":"Essa é uma nota teste",
            "tags":["tagtest1","tagtest2"],
            "links":["link1","link2"],
            "user_id":1
        }

        const { title, description, tags, links, user_id} = noteData


    const notesRepository = new NotesRepositoryInMemory()

    const notesCreateService = new NotesCreateService(notesRepository)

    const note_id = await notesCreateService.execute({ title, description, tags, links, user_id})


    console.log(note_id)

    expect(note_id).toBe(1)
    })
    it("apperror deve retornar Nenhum titulo foi informado", async ()=>{
        const noteData = {
            "title":undefined,
            "description":"Essa é uma nota teste",
            "tags":["tagtest1","tagtest2"],
            "links":["link1","link2"],
            "user_id":"1"
        }

        try{
            const notesRepository = new NotesRepositoryInMemory()

            const notesCreateService = new NotesCreateService(notesRepository)
    
            await notesCreateService.execute(noteData)
        }catch(error){
            expect(error).toBeInstanceOf(AppError)
            expect(error).toHaveProperty("statusCode",400)
        }
        // const { title, description, tags, links, user_id} = noteData


      
        




        // expect(await notesCreateService.execute({ title, description, tags, links, user_id}))
        // .rejects.toEqual(new AppError("Nenhum titulo foi informado"))
    })
})