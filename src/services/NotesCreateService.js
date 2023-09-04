class NotesCreateService{
    constructor(userRepository){
        this.userRepository = userRepository
        console.log("output userrepo",userRepository)
        //isso so globaliza a const? (a parte que comeca com this sim)
        //nao tem importacao? (importacao ocorre pelo userController?)
        //constructor ta pedindo de referencia o userRepository? (sim)
    }
    async execute({title, description, tags, links, user_id}){

        console.log(tags,links)
    const id = await this.userRepository.create({title, description,user_id})
    //retorna o resultado do create, puxamos o note_id do lastid
    const note_id = id.lastID

    links.forEach(async(link)=>{
        console.log(note_id, link)
        await this.userRepository.linksInsert({links:link,note_id})
        return
    })//para cada tag, faca o insert no banco
  

    tags.forEach(async(tag)=>{
        await this.userRepository.tagsInsert({name:tag,note_id,user_id})
        return
    })//para cada link, faca o insert no banco
    }
}
module.exports=NotesCreateService