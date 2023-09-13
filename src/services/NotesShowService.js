const AppError = require("../utils/AppError")

class NotesShowService{
    constructor(notesRepository){
        this.notesRepository = notesRepository       
    }

    async execute({id}){

        console.log(id)

            const notas = await this.notesRepository.searchNotesComplete({note_id:id})
            console.log("notas note",notas.note)
            if(notas.note.length!==0){
                try{
                    if(notas.tags.length==0){
                        delete notas.tags
                    }
                    return notas

                }catch{
                    throw new AppError("erro interno",500)
                }
            }else{
                throw new AppError("nota nao encontrada",404)
                    
            }

    }
}
// const {note,tags,links} = await this.notesRepository.searchNotesComplete({note_id:id})
            // console.log(note)
            // // if(note.length!==0){
            // //     const isTagEmpty = tags.length==0 ? "" : tags
                
            // //     console.log("tagempty",isTagEmpty)
            // //     return {note,tags:isTagEmpty,links}
            // // }else{
            // //     throw new AppError("nota nao encontrada1",404)
                
            // // }
module.exports = NotesShowService
