exports.up = knex =>
    knex.schema.createTable(`carsimages`, table => {
        table.increments("id")
        table.text("image")
        table.integer("cars_id").references("id").inTable("cars").onDelete("CASCADE")
    })
exports.down = knex => knex.schema.dropTable('carsimages')
