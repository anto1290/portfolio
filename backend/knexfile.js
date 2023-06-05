require('dotenv')
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME_DEV,
      user: process.env.DB_USERNAME_DEV,
      password: process.env.DB_PASSWORD_DEV,
      host: process.env.DB_HOST_DEV || "127.0.0.1",
      timezone: process.env.DB_TIMEZONE_DEV || "+07:00"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST || "127.0.0.1",
      timezone: process.env.DB_TIMEZONE || "+07:00"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST || "127.0.0.1",
      timezone: process.env.DB_TIMEZONE || "+07:00"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }

};
