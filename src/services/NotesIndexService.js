const AppError = require("../utils/AppError")

class NotesIndexService{

    constructor(notesRepository){
        this.notesRepository = notesRepository
    }

    async execute({title,tags,user_id,response}){

        let notes

        if (tags) {
          const filterTags = tags.split(',').map(tag => tag.trim())
    
          notes = await this.notesRepository.indexTags({user_id, title, filterTags})

          console.log("if true ",filterTags)
          console.log(notes)
            
          
        } else {
          notes = await this.notesRepository.indexNotes({user_id, title})
          

          if(notes.length == 0){
            //POR QUE O  SHOW SERVICE ESTA CAINDO AKI
            throw new AppError("A sua pesquisa não encontrou nenhuma nota")
          }

          console.log("if false ",notes)

        }
    
        const userTags = await this.notesRepository.userTags({user_id})

        const notesWithTags = notes.map(note => {
          const noteTags = Object.values(userTags).filter(tag => tag.note_id === note.id)
          //colocamos o Object.values ja que o filter so funciona para arrays e o usertags e obj
          
          return {
            ...note,
            tags: noteTags
          }
        })


        return notesWithTags
    }
}
module.exports=NotesIndexService