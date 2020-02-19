
exports.up = function(knex) {
  return knex.schema.createTable('characters', tbl => {
    // adds id column that auto-increments
    tbl.increments();

    tbl
      .string('name', 256)  // optional length defaults to 255
      .notNullable()
      .index();  // makes searching by name faster
    
    tbl.string('house', 128);

    tbl.string('origin', 256);

    // booleans normally stored as 1 for true and 0 for false (not Postgres)
    tbl.boolean('alive').defaultTo(true); 
  });
};

// how to undo changes => knex migrate:rollback
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('characters');
};
