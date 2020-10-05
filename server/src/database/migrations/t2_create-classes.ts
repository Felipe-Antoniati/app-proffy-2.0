import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
    table.string('subject').notNullable();
    table.string('cost').notNullable();

    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    ;
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}