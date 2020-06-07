import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('produto', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('img').notNullable();
        table.decimal('valor').notNullable();
        table.date('inicio_promo').notNullable();
        table.date('fim_promo').notNullable();
        table.decimal('num_curtidas').notNullable();
        table.string('unidade_med').notNullable();

        table.integer('categoria_id')
            .notNullable()
            .references('id')
            .inTable('categoria');
        table.integer('supermercado_id')
            .notNullable()
            .references('id')
            .inTable('supermercado');
    })
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('produto');
}