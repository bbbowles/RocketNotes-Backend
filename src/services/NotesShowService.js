class NotesShowService{
    constructor(userRepository){
        this.userRepository = userRepository       
    }

    async execute({id}){

        const {note,tags,links} = await this.userRepository.searchNotesComplete(id)

        return {note,tags,links}

    }
}
module.exports = NotesShowService
