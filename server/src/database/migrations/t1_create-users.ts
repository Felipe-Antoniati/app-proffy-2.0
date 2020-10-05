import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.string('id').notNullable();
    table.string('avatar').notNullable();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}