const config = require('dotenv').config();
console.log(process.env.DB_USER);

module.exports = {
  development: {
    username: process.env.DB_USER || 'postgress',
    password: process.env.DB_PASS || 'newPasswordX',
    database: process.env.DB_NAME || 'graphqldb',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    use_env_variable: 'DEV_DATABASE_URL',
  },
  test: {
    username: process.env.DB_USER || 'postgress',
    password: process.env.DB_PASS || 'newPasswordX',
    database: process.env.DB_NAME || 'graphqldb',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    use_env_variable: 'TEST_DATABASE_URL',
  },
  production: {
    username: process.env.DB_USER || 'postgress',
    password: process.env.DB_PASS || 'newPasswordX',
    database: process.env.DB_NAME || 'graphqldb',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
  },
};