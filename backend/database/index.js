const knex = require('knex')
const DatabaseConfig = require('../config/database')
const conn = knex({
  client: 'postgresql', 
  connection: DatabaseConfig
})

if (process.argv[2] === 'create') {
  conn.raw(`CREATE DATABASE ${DatabaseConfig.database}`)
    .finally(() => {
      console.log('Database Created')
    })
    .catch((err) => {
      throw err;
    });
}

module.exports = conn
