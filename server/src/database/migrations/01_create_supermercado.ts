import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('market', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('img').notNullable();
        table.string('score').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('state', 2).notNullable();
    })
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('market');
}