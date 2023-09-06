const NotesRepositoryInMemory = require("../repositories/NotesRepositoryInMemory")
const NotesShowService = require("./NotesShowService")
const AppError = require("../utils/AppError")

describe("NotesShowService", ()=>{
    it("specific note should be shown", async ()=>{
        
    const notesRepository = new NotesRepositoryInMemory()

    const notesShowService = new NotesShowService(notesRepository)
    
    const resultado = await notesShowService.execute({id:"1"})

    // const {note,tags,links} = resultado

    console.log(resultado)

    expect(resultado).toHaveProperty("note","tags","links")
    
    })
    it("no note should be shown", async ()=>{
        
        try{
            const notesRepository = new NotesRepositoryInMemory()
        
            const notesShowService = new NotesShowService(notesRepository)
            
            await notesShowService.execute({})
        }catch(error){
            expect(error).toBeInstanceOf(AppError)
        }
        })
})// outro it sem o link