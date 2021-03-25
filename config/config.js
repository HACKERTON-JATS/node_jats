require('dotenv').config();

module.exports = {
  "development": {
    "username": "outuser",
    "password": process.env.PASSWORD,
    "database": "jats_db",
    "host": "211.38.86.92",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "timezone": "+09:00"
  },
  "test": {
    "username": "outuser",
    "password": process.env.PASSWORD,
    "database": "jats_db",
    "host": "211.38.86.92",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "timezone": "+09:00"
  },
  "production": {
    "username": "outuser",
    "password": process.env.PASSWORD,
    "database": "jats_db",
    "host": "211.38.86.92",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "timezone": "+09:00"
  }
}
