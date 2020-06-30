import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('market', table => {
        table.increments('id').primary();
        table.string('responsible').notNullable();
        table.string('company').notNullable();
        table.string('score').notNullable();
        table.string('img').notNullable();
        //Data acess
        table.string('email').notNullable();
        table.string('password').notNullable();
        //Location
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('street').notNullable();
        table.string('district').notNullable();
        table.string('cep').notNullable();
        table.decimal('number').notNullable();
        table.string('city').notNullable();
        table.string('state', 2).notNullable();
    })
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('market');
}