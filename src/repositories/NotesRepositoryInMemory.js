
class NotesRepository{

    async create({title, description,user_id}){

        const note_id = [1]

        return note_id // FUNCIONANDO!

    }
    async linksInsert({links,note_id}){

        console.log("inseriu link")
 
        return
    }
    async tagsInsert({name,note_id,user_id}){

        console.log("inseriu tag")


        return
    }
    async searchNotesComplete({notes_id}){

        console.log(notes_id)

        if(notes_id){
            const note = [{
                "id": 1,
                "title": "titulo teste",
                "description": "note teste",
                "user_id": 1,
                "created_at": "2023-09-04 16:21:37",
                "updated_at": "2023-09-04 16:21:37"
            }]
            const tags = [{
                "id": 1,
                "name": "nome teste",
                "note_id": 1,
                "user_id": 1
            }]
            const links = [{
                "id": 1,
                "url": "url teste",
                "note_id": 1,
                "created_at": "2023-09-04 16:21:37"
            }]
            return({note,tags,links})
        }else{
            return
        }

         
    }
    async delete(id){
        console.log("nota deletada")

        const resultado = "ok"

        return resultado
        
    }
    async indexTags({user_id, title, filterTags}){
        const tags = [{
            "id": 1,
            "name": "nome teste",
            "note_id": 1,
            "user_id": 1
        }]

        return tags
    }
    async indexNotes({user_id, title}){
        const notes = [{
            "id": 1,
            "title": "titulo teste",
            "description": "note teste",
            "user_id": 1,
            "created_at": "2023-09-04 16:21:37",
            "updated_at": "2023-09-04 16:21:37"
        },
        {
            "id": 2,
            "title": "titulo teste2",
            "description": "note teste2",
            "user_id": 1,
            "created_at": "2023-09-04 16:21:37",
            "updated_at": "2023-09-04 16:21:37"
        }
        ]

        return notes
    }
    async userTags({user_id}){
        const userTags = [
            {
                "id": 2,
                "name": "express",
                "note_id": 2,
                "user_id": 1
            },
            {
                "id": 1,
                "name": "node",
                "note_id": 1,
                "user_id": 1
            }
        ]

        return userTags
    }
}
module.exports = NotesRepository