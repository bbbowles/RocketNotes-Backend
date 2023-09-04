class NotesIndexService{

    constructor(notesRepository){
        this.notesRepository = notesRepository
    }

    async execute({title,tags,user_id}){

        let notes

        if (tags) {
          const filterTags = tags.split(',').map(tag => tag.trim())
    
          notes = await this.notesRepository.indexTags({user_id, title, filterTags})
            
          
        } else {
          notes = await this.notesRepository.indexNotes({user_id, title})

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