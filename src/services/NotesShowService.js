const AppError = require("../utils/AppError")

class NotesShowService{
    constructor(notesRepository){
        this.notesRepository = notesRepository       
    }

    async execute({id}){

        console.log(id)

        try{
            const {note,tags,links} = await this.notesRepository.searchNotesComplete({notes_id:id})
            if(note){
                return {note,tags,links}
            }else{
                throw new AppError("nota nao encontrada1",404)
                
            }

        }catch{
            throw new AppError("nota nao encontrada2",404)

        }

    }
}
module.exports = NotesShowService
