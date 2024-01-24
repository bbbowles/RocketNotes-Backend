exports.up = knex =>
    knex.schema.createTable(`cars`, table => {
        table.increments("id")
        table.text("names")
        table.text("brand")
        table.integer("year")
        table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")
    })
exports.down = knex => knex.schema.dropTable('cars')
