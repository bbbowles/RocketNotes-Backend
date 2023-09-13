const NotesRepositoryInMemory = require("../repositories/NotesRepositoryInMemory")
const NotesIndexService = require("../services/NotesIndexService")

describe("NotesIndexService",()=>{
    it("an index of all notes with the name like titulo teste and tag tag teste of an user should be shown",async()=>{
    
        const notesRepository = new NotesRepositoryInMemory()
    
        const notesIndexService = new NotesIndexService(notesRepository)
        
        const notesWithTags = await notesIndexService.execute({title:"titulo teste", tags:"tag teste", user_id:"1"}) 
    
        console.log(notesWithTags)

        expect(notesWithTags[0]).toHaveProperty("id")
        expect(notesWithTags[0]).toHaveProperty("tags")


        
    })


    
    it("an index of all notes with the name like titulo teste of an user should be shown",async()=>{
    
        const notesRepository = new NotesRepositoryInMemory()
    
        const notesIndexService = new NotesIndexService(notesRepository)
        
        const notesWithTags = await notesIndexService.execute({title:"titulo teste", user_id:"1"}) 
        
        console.log(notesWithTags)

        expect(notesWithTags[0]).toHaveProperty("id")

    })




    it("all notes should be shown(note 0)",async()=>{
        
        const notesRepository = new NotesRepositoryInMemory()

        const notesIndexService = new NotesIndexService(notesRepository)
        
        const notesWithTags = await notesIndexService.execute({ user_id:"2"}) 
        
        console.log(notesWithTags)

        expect(notesWithTags[0]).toHaveProperty("id")

    })




    it("all notes should be shown(note 1)",async()=>{
        
        const notesRepository = new NotesRepositoryInMemory()

        const notesIndexService = new NotesIndexService(notesRepository)
        
        const notesWithTags = await notesIndexService.execute({ user_id:"2"}) 
        
        console.log(notesWithTags)

        expect(notesWithTags[1]).toHaveProperty("id")

    })
})