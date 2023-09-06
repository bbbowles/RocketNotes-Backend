const AppError = require("../utils/AppError")

class NotesCreateService{
    constructor(notesRepository){
        this.notesRepository = notesRepository
     
    }
    async execute({title, description, tags, links, user_id}){

        console.log({title, description, tags, links, user_id})



    if(!title){
        throw new AppError("Nenhum titulo foi informado",400)
    }else{

        const id = await this.notesRepository.create({title, description,user_id})


        const note_id = id[0] // estamos recebendo o id em array?

        
        if(links){
            links.forEach(async(link)=>{
                await this.notesRepository.linksInsert({links:link,note_id})
                return
            })
        }
        if(tags){
            tags.forEach(async(tag)=>{
                await this.notesRepository.tagsInsert({name:tag,note_id,user_id})
                return
            })
        }   
    

    

        return note_id
    }
    }

}
module.exports=NotesCreateService