const AppError = require("../utils/AppError")

class NotesDeleteService{
    constructor(notesRepository){
        this.notesRepository = notesRepository
    }
    async execute({id}){
        console.log(id)

        const {note,tags,links} = await this.notesRepository.searchNotesComplete({notes_id:id})

        console.log("recebemos note",note)
        

        if(note.length>0){
            try{
                const resultado = await this.notesRepository.delete(id)

                return resultado
            }catch{
                throw new AppError("erro ao deletar",500)
            }

        }else{
            throw new AppError("nota inexistente",404)
        }


    }
}
module.exports = NotesDeleteService