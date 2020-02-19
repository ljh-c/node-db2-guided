
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name')
    .truncate() // resets id back to 1
    .then(function () {
      const characters = [
        {
          name: "Eddard",
          house: "Stark",
          sigil: "wolf",
          alive: false,
          origin: "Winterfell"
        },
        {
          name: "Jon",
          house: "Stark",
          sigil: "wolf",
          alive: true,
          origin: "Winterfell"
        }
      ];
      // Inserts seed entries
      return knex('characters').insert(characters);
    });
};
