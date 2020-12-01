import * as dotenv from 'dotenv';

dotenv.config();

export default {
  "type": process.env.DB_TYPE,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_DATABASE,
  //"synchronize": true,
  "logging": false,
  "entities": [
    "./src/models/**/*.ts"
  ],
  "migrations": ["./src/database/migrations/*.ts"],
  "cli": {
    "entitiesDir": "./src/models",
    "migrationsDir": "./src/database/migrations"
  }
}