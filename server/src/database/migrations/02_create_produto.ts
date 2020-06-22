import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('product', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('img').notNullable();
        table.decimal('value').notNullable();
        table.date('start_promo').notNullable();
        table.boolean('available').notNullable();
        table.date('end_promo').notNullable();
        table.decimal('like').notNullable();
        table.string('unity').notNullable();
        table.integer('id_category')
            .notNullable()
            .references('id')
            .inTable('category');
        table.integer('id_market')
            .notNullable()
            .references('id')
            .inTable('market');
    })
}
export async function down(knex: Knex) {
    return knex.schema.dropTable('product');
}