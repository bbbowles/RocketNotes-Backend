exports.up = knex =>
    knex.schema.createTable("enderecos",table =>{
        table.increments("id")
        table.integer("cep").notNullable()
        table.text("nome").notNullable()
        table.text("cidade").notNullable()
        table.text("bairro").notNullable()
        table.text("estado").notNullable()
        table.integer("numero").notNullable()
        table.text("complemento")
        table.integer("user_id").references("id").inTable("users")

    })
exports.down = knex => knex.schema.dropTable("enderecos")