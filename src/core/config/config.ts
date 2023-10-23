require('dotenv').config();

const databaseConfig = {
  database: process.env.MYSQL_DB ?? 'budget_tracker',
  username: process.env.MYSQL_USER ?? 'root',
  password: process.env.MYSQL_PASS ?? 'password',
  host: process.env.MYSQL_HOST ?? '127.0.0.1',
  dialect: 'mysql',
  dialectOptions: {
    bigNumberStrings: true
  }
}

module.exports = {
  development: {
    ...databaseConfig
  },
  test: {
    database: 'budget_tracker_test',
    username: process.env.MYSQL_USER ?? 'root',
    password: process.env.MYSQL_PASS ?? 'password',
    host: process.env.MYSQL_HOST ?? '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  staging: {
    ...databaseConfig
  },
  production: {
    ...databaseConfig,
    logging: false
  }
}
