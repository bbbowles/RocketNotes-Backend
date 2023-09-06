const NotesDeleteService = require("./NotesDeleteService")
const NotesRepositoryInMemory = require("../repositories/NotesRepositoryInMemory")

describe("NotesDeleteService",()=>{
    it("note should be deleted", async ()=>{

        const notesRepository = new NotesRepositoryInMemory()

        const notesDeleteService = new NotesDeleteService(notesRepository)
        
        const resultado = await notesDeleteService.execute({id:"1"})


        expect(resultado).toBe("ok") //expect status 200
    })
})