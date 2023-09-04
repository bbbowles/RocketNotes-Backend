const AppError = require("../utils/AppError")

class NotesDeleteService{
    constructor(notesRepository){
        this.notesRepository = notesRepository
    }
    async execute({id}){
        console.log(id)

        const {note} = await this.notesRepository.searchNotesComplete(id)
        

        if(note){
            try{
                await this.notesRepository.delete(id)
            }catch{
                throw new AppError("erro ao deletar",500)
            }

        }else{
            throw new AppError("nota inexistente",404)
        }

        return
    }
}
module.exports = NotesDeleteService