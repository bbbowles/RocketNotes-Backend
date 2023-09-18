const knex = require('../database/knex')


class NotesRepository {

    async create({ title, description, user_id }) {

        const note_id = await knex("notes").insert({ title, description, user_id })



        return note_id // FUNCIONANDO!

    }
    async linksInsert({ links, note_id }) {

        await knex("links").insert({ url: links, note_id })

        return
    }
    async tagsInsert({ name, note_id, user_id }) {

        await knex("tags").insert({ name, note_id, user_id })


        return
    }
    async searchNotesComplete({ note_id }) {
        // const database = await sqliteConnection()
        // const note = await database.get(
        //     "SELECT * FROM notes WHERE id=?"
        // ,[note_id])
        // const tags = await database.get(
        //     "SELECT * FROM tags WHERE note_id=? ORDER BY name"
        // ,[note_id])
        // const links = await database.get(
        //     "SELECT * FROM links WHERE note_id=? ORDER BY created_at"
        // ,[note_id])

        console.log("notes id", note_id)

        const note = await knex("notes").select("*").where("id", note_id)

        const tags = await knex("tags")
            .select("*")
            .where("note_id", note_id)
            .orderBy("name")

        const links = await knex("links")
            .select("*")
            .where("note_id", note_id)
            .orderBy("created_at")

        console.log({ note, tags, links })



        return ({ note, tags, links }) //FUNCIONANDO!
    }
    async delete(id) {
        await knex("notes").delete("*").where("id", id)

        return
    }
    async indexTags({ user_id, title, filterTags }) {
        const notes = await knex('tags')
            .select(['notes.id', 'notes.title', 'notes.user_id'])
            .where('notes.user_id', user_id)
            .whereLike('notes.title', `%${title}%`)
            .whereIn('name', filterTags)
            .innerJoin('notes', 'notes.id', 'tags.note_id')
            .groupBy('notes.id')
            .orderBy('notes.title')

        console.log(notes, "INDEXTAGS")

        return notes
    }
    async indexNotes({ user_id, title }) {
        const notes = await knex('notes')
            .where({ user_id })
            .whereLike('title', `%${title}%`)
            .orderBy('title')

        console.log(notes, "INDEXNOTES")

        return notes
    }
    async userTags({ user_id }) {

        const userTags = await knex("tags").select("*").where("user_id", user_id)

        return userTags
    }
}
module.exports = NotesRepository