import dotenv from 'dotenv'
dotenv.config()

const databaseConfig = {
  database: process.env.MYSQL_DB || 'foodies_haven',
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASS || 'password',
  host: process.env.MYSQL_HOST || '127.0.0.1',
  dialect: 'mysql',
  dialectOptions: {
    bigNumberStrings: true
    }
};

module.exports = {
  development: {
    ...databaseConfig
  },
  test: {
    ...databaseConfig
  },
  staging: {
    ...databaseConfig
  },
  production: {
    ...databaseConfig,
    logging: false
  }
};