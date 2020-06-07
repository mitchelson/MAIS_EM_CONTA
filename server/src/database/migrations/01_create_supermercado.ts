import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('supermercado', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('img').notNullable();
        table.string('nota').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('cidade').notNullable();
        table.string('uf', 2).notNullable();
    })
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('categoria');
}