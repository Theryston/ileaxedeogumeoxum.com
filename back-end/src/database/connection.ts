import { Sequelize } from 'sequelize';
import { config as dotenv } from 'dotenv'
dotenv()

const connection = new Sequelize('ile', process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
})

export { connection }