const sqliteConnection = require("../database/sqlite")
const knex = require('../database/knex')


class NotesRepository{

    async create({title, description,user_id}){
        console.log({title, description,user_id})
        const database = await sqliteConnection()
        const note_id = await database.run(
            "INSERT INTO notes (title,description,user_id) VALUES (?,?,?)"
        ,[title,description,user_id])

        return note_id // FUNCIONANDO!

    }
    async linksInsert({links,note_id}){
        const database = await sqliteConnection()
        await database.run(
            "INSERT INTO links (url, note_id) VALUES (?,?)"
        ,[links,note_id])

        return
    }
    async tagsInsert({name,note_id,user_id}){
        const database = await sqliteConnection()
        await database.run(
            "INSERT INTO tags (name,note_id,user_id) VALUES (?,?,?)"
        ,[name,note_id,user_id])

        return
    }
    async searchNotesComplete(note_id){
        const database = await sqliteConnection()
        const note = await database.get(
            "SELECT * FROM notes WHERE id=?"
        ,[note_id])
        const tags = await database.get(
            "SELECT * FROM tags WHERE note_id=? ORDER BY name"
        ,[note_id])
        const links = await database.get(
            "SELECT * FROM links WHERE note_id=? ORDER BY created_at"
        ,[note_id])

        return({note,tags,links}) //FUNCIONANDO!
    }
    async delete(id){
        const database = await sqliteConnection()
         database.run(
            "DELETE FROM notes WHERE id=?"
         ,[id])

         return
    }
    async indexTags({user_id, title, filterTags}){
        const notes = await knex('tags')
        .select(['notes.id', 'notes.title', 'notes.user_id'])
        .where('notes.user_id', user_id)
        .whereLike('notes.title', `%${title}%`)
        .whereIn('name', filterTags)
        .innerJoin('notes', 'notes.id', 'tags.note_id')
        .groupBy('notes.id')
        .orderBy('notes.title')

        console.log(notes,"notes")

        return notes
    }
    async indexNotes({user_id, title}){
        const notes = await knex('notes')
        .where({ user_id })
        .whereLike('title', `%${title}%`)
        .orderBy('title')

        console.log(notes,"notes")

        return notes
    }
    async userTags({user_id}){
        const database = await sqliteConnection()
        const userTags = await database.get(
            "SELECT * FROM tags WHERE user_id=?"
        ,[user_id])

        console.log(userTags,"usertags")

        return userTags
    }
}
module.exports = NotesRepository