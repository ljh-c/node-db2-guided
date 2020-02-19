# Migrations

Every change to the database schema needs a new migration.

Characters

- id => generated by Database
- name | string | up to 256 characters | required (not NULL) | index (makes searches by name faster)
- house | string | up to 128 | optional (NULL)
- origin | string | up to 256 | optional
- alive | boolean

* `npm i -g knex`
* `knex init` to create knexfile.js
* open knexfile.js and configure connection
* `knex migrate:make create_[tableName]`
* `knex migrate:latest`
* `knex migrate:rollback`
* `knex seed:run`